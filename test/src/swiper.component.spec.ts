import { Component, ElementRef } from '@angular/core';
import {
    async,
    inject,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { SwiperComponent } from '../../src/swiper.component';

@Component({
    template: `<div>
         <swiper [config]="config">
            <div class="swiper-wrapper">
                <img class="swiper-slide" *ngFor="let image of images" [src]="image">
            </div>
        </swiper>
    </div>`,
})
class TestHostComponent {
    images: string[];
    config: Object = {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    };

    getImages() {
        this.images = [
            'http://localhost:3000/public/images/yellow.png',
            'http://localhost:3000/public/images/green.png',
            'http://localhost:3000/public/images/blue.png',
            'http://localhost:3000/public/images/red.png'
        ];
    }
}

describe('SwiperComponent', () => {
    let mockSwiper: any;


    beforeEach(() => {

        (<any>window).Swiper = (element: any, options: any) => {
            mockSwiper = {
                element: element,
                options: options,
                update() {

                }
            };

            spyOn(mockSwiper, 'update');

            return mockSwiper;
        };

        spyOn(window, 'Swiper').and.callThrough();

        TestBed.configureTestingModule({
            declarations: [
                TestHostComponent,
                SwiperComponent
            ]
        });
    });

    it('should build without error', async(() => {
        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(TestHostComponent);

            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;

            expect(compiled).not.toBeNull();
        });
    }));

    it('should create a new swiper instance with the swiper-wrapper element as the first parameter', async(() => {
        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(TestHostComponent);

            fixture.detectChanges();

            expect((<any>window).Swiper).toHaveBeenCalledWith(fixture.elementRef.nativeElement.querySelector('.swiper-container'), jasmine.anything());
        });
    }));

    it('should create a new swiper instance with the TestHostComponent.config as the first parameter', async(() => {
        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(TestHostComponent);

            fixture.detectChanges();

            expect((<any>window).Swiper).toHaveBeenCalledWith(jasmine.anything(), fixture.componentInstance.config);
        });
    }));

    it('should NOT call Swiper.update if the swiper-wrapper content has not been changed', async(() => {
        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(TestHostComponent);

            fixture.detectChanges();

            expect(mockSwiper.update).not.toHaveBeenCalled();
        });
    }));

    it('should call Swiper.update if the swiper-wrapper content has been changed', async(() => {
        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(TestHostComponent);

            fixture.detectChanges();

            fixture.componentInstance.getImages();

            fixture.detectChanges();            

            expect(mockSwiper.update).toHaveBeenCalled();
        });
    }));
});
