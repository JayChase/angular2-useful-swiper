import { ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
export declare class SwiperComponent implements AfterViewInit, AfterViewChecked {
    private elementRef;
    config: Object;
    Swiper: any;
    private swiperWrapper;
    private slideCount;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
}
