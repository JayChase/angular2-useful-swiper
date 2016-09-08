import { Component, Input, OnInit, OnChanges, SimpleChanges, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

declare var Swiper: any;

@Component({
    moduleId: module.id,
    selector: 'swiper',
    templateUrl: 'swiper.component.html',
    styleUrls: ['swiper.component.css']
})
export class SwiperComponent implements OnInit, AfterViewChecked {
    //add all the options as optional settings and use them to create an options object
    @Input() config: Object;
    @Input() ready: boolean;

    Swiper: any;

    private swiperWrapper: any;
    private slideCount: number = 0;

    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
        this.swiperWrapper = this.elementRef.nativeElement.querySelector('.swiper-wrapper');

        this.slideCount = this.swiperWrapper.childElementCount;

        this.Swiper = new Swiper('.swiper-container', this.config);
    }

    ngAfterViewChecked() {
        if (this.slideCount !== this.swiperWrapper.childElementCount) {       
            this.slideCount = this.swiperWrapper.childElementCount
            this.Swiper.update();
        }
    }
}