/// <reference types="swiper" />
import { ElementRef, AfterViewChecked, AfterViewInit, ChangeDetectorRef } from '@angular/core';
export declare class SwiperComponent implements AfterViewChecked, AfterViewInit {
    private elementRef;
    private changeDetectorRef;
    config: SwiperOptions;
    initialize: boolean;
    swiper: Swiper;
    private swiperWrapper;
    private slideCount;
    private initialized;
    private shouldInitialize;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    setup(): void;
    ngAfterViewChecked(): void;
}
