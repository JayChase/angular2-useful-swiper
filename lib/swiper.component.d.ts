import { ElementRef, AfterViewChecked, AfterViewInit, ChangeDetectorRef } from '@angular/core';
export declare class SwiperComponent implements AfterViewChecked, AfterViewInit {
    private elementRef;
    private changeDetectorRef;
    config: any;
    initialize: boolean;
    Swiper: any;
    private swiperWrapper;
    private slideCount;
    private initialized;
    private shouldInitialize;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    setup(): void;
    ngAfterViewChecked(): void;
}
