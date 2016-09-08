import { OnInit, ElementRef, AfterViewChecked } from '@angular/core';
export declare class SwiperComponent implements OnInit, AfterViewChecked {
    private elementRef;
    config: Object;
    ready: boolean;
    Swiper: any;
    private swiperWrapper;
    private slideCount;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
}
