import { ElementRef, AfterViewChecked, AfterViewInit, NgZone } from '@angular/core';
export declare class SwiperComponent implements AfterViewChecked, AfterViewInit {
    private elementRef;
    private ngZone;
    config: Object;
    initialize: boolean;
    Swiper: any;
    private swiperWrapper;
    private slideCount;
    private initialized;
    private shouldInitialize;
    constructor(elementRef: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    setup(): void;
    ngAfterViewChecked(): void;
}
