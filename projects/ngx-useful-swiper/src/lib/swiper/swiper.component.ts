import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper/bundle';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperComponent
  implements AfterViewChecked, AfterViewInit, OnDestroy {
  // add all the options as optional settings and use them to create an options object
  @Input() config: SwiperOptions;
  @Input('initialize') set initialize(value: boolean) {
    this.shouldInitialize = this.initialized ? false : value;
  }

  swiper: Swiper;

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

  ngOnDestroy() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
  }
}
