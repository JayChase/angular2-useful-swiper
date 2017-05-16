import { Component, Input, OnInit, ElementRef, AfterViewChecked, AfterViewInit, ChangeDetectorRef } from '@angular/core';

declare var Swiper: any;

@Component({
    selector: 'swiper',
    template: `<div class="swiper-container">
                    <ng-content></ng-content>
                </div>`,
    styles: [':host {display: block;}', ':host > div {width: 100%;height: 100%;}']
})
export class SwiperComponent implements AfterViewChecked, AfterViewInit {
    // add all the options as optional settings and use them to create an options object
    @Input() config: any;
    @Input('initialize') set initialize(value: boolean) {
        this.shouldInitialize = this.initialized ? false : value;
    };

    Swiper: any;

    private swiperWrapper: any;
    private slideCount = 0;
    private initialized = false;
    private shouldInitialize = true;

    constructor(private elementRef: ElementRef, private changeDetectorRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        if (this.shouldInitialize) {
            this.setup();
        }
    }

    setup() {
        if (!this.Swiper) {
            // if rendered on server querySelector is undefined
            if(this.elementRef.nativeElement.querySelector) {
                this.swiperWrapper = this.elementRef.nativeElement.querySelector('.swiper-wrapper');
                this.slideCount = this.swiperWrapper.childElementCount;
                this.Swiper = new Swiper(this.elementRef.nativeElement.querySelector('swiper > div'), this.config);
                this.changeDetectorRef.detectChanges();
            }

            this.shouldInitialize = false;
        }
    }

    ngAfterViewChecked() {
        if (this.shouldInitialize) {
            this.setup();
        }

        if (this.swiperWrapper && this.slideCount !== this.swiperWrapper.childElementCount) {
            this.slideCount = this.swiperWrapper.childElementCount;
            this.Swiper.update();
        }
    }
}