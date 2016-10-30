import { Component } from '@angular/core';
import {
    async,
    inject,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { SwiperModule } from '../../src/swiper.module';

import { DemoComponent } from '../../demo/demo.component';

class MockSwiper {
    element: any;
    options: any;

    constructor(element: any, options: any) {
        this.element = element;
        this.options = options;
    }

    update() {

    }
}

describe('demo component', () => {
    let mockSwiper: MockSwiper;

    beforeEach(() => {

        (<any>window).Swiper = (element: any, options: any) => {
            mockSwiper = new MockSwiper(element, options);
            spyOn(mockSwiper, 'update');

            return mockSwiper;
        };

        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                MaterialModule.forRoot(),
                SwiperModule
            ],
            declarations: [
                DemoComponent
            ]
        });
    });

    it('should build without error', async(() => {
        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(DemoComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;

            expect(compiled).not.toBeNull();
        });
    }));
});