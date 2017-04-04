import { Component, Input, ElementRef, NgZone } from '@angular/core';
var SwiperComponent = (function () {
    function SwiperComponent(elementRef, ngZone) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.slideCount = 0;
        this.initialized = false;
        this.shouldInitialize = true;
    }
    Object.defineProperty(SwiperComponent.prototype, "initialize", {
        set: function (value) {
            this.shouldInitialize = this.initialized ? false : value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    SwiperComponent.prototype.ngAfterViewInit = function () {
        if (this.shouldInitialize) {
            this.setup();
        }
    };
    SwiperComponent.prototype.setup = function () {
        if (!this.Swiper) {
            this.swiperWrapper = this.elementRef.nativeElement.querySelector('.swiper-wrapper');
            this.slideCount = this.swiperWrapper.childElementCount;
            //wrapperClass: 'my-wrapper-class',
            //containerModifierClass: 'my-container-class'
            this.Swiper = new Swiper(this.elementRef.nativeElement.querySelector('swiper > div'), this.config);
            this.shouldInitialize = false;
        }
    };
    SwiperComponent.prototype.ngAfterViewChecked = function () {
        if (this.shouldInitialize) {
            this.setup();
        }
        if (this.swiperWrapper && this.slideCount !== this.swiperWrapper.childElementCount) {
            this.slideCount = this.swiperWrapper.childElementCount;
            this.Swiper.update();
        }
    };
    return SwiperComponent;
}());
export { SwiperComponent };
SwiperComponent.decorators = [
    { type: Component, args: [{
                selector: 'swiper',
                template: "<div>\n                    <ng-content></ng-content>\n                </div>",
                styles: [':host {display: block;}', ':host > div {width: 100%;height: 100%;}']
            },] },
];
/** @nocollapse */
SwiperComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: NgZone, },
]; };
SwiperComponent.propDecorators = {
    'config': [{ type: Input },],
    'initialize': [{ type: Input, args: ['initialize',] },],
};
//# sourceMappingURL=swiper.component.js.map