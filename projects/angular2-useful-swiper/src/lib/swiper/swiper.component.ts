import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input
} from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements AfterViewChecked, AfterViewInit {
  // add all the options as optional settings and use them to create an options object
  @Input() config: SwiperOptions;
  @Input('initialize') set initialize(value: boolean) {
    this.shouldInitialize = this.initialized ? false : value;
  }

  swiper: any;

  private swiperWrapper: any;
  private slideCount = 0;
  private initialized = false;
  private shouldInitialize = true;

  constructor(
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    if (this.shouldInitialize) {
      this.setup();
    }
  }

  setup() {
    if (!this.swiper) {
      // if rendered on server querySelector is undefined
      if (this.elementRef.nativeElement.querySelector) {
        this.swiperWrapper = this.elementRef.nativeElement.querySelector(
          '.swiper-wrapper'
        );
        this.slideCount = this.swiperWrapper.childElementCount;
        this.swiper = new Swiper(
          this.elementRef.nativeElement.querySelector('swiper > div'),
          this.config
        );
        this.changeDetectorRef.detectChanges();
      }

      this.shouldInitialize = false;
    }
  }

  ngAfterViewChecked() {
    if (this.shouldInitialize) {
      this.setup();
    }

    if (
      this.swiperWrapper &&
      this.slideCount !== this.swiperWrapper.childElementCount
    ) {
      this.slideCount = this.swiperWrapper.childElementCount;
      this.swiper.update();
    }
  }
}
