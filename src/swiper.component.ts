import { Component, Input, ElementRef, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';

declare var Swiper: any;

@Component({
    selector: 'swiper',
    template: `<div class="swiper-container">
                    <ng-content></ng-content>
                </div>`,
    styles: [':host {display: block;}', '.swiper-container {width: auto;height: auto;}']
})
export class SwiperComponent implements AfterViewInit, AfterViewChecked {
    //add all the options as optional settings and use them to create an options object
    @Input() config: Object;

    Swiper: any;

    private swiperWrapper: any;
    private slideCount: number = 0;

    constructor(private elementRef: ElementRef) { }

    ngAfterViewInit() {
        this.swiperWrapper = this.elementRef.nativeElement.querySelector('.swiper-wrapper');
        this.slideCount = this.swiperWrapper.childElementCount;
        this.Swiper = new Swiper(this.elementRef.nativeElement.querySelector('.swiper-container'), this.config);
    }

    ngAfterViewChecked() {
        if (this.slideCount !== this.swiperWrapper.childElementCount) {
            this.slideCount = this.swiperWrapper.childElementCount
            this.Swiper.update();
        }
    }
}