"use strict";
var core_1 = require('@angular/core');
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
            this.Swiper = new Swiper(this.elementRef.nativeElement.querySelector('.swiper-container'), this.config);
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
    SwiperComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'swiper',
                    template: "<div class=\"swiper-container\">\n                    <ng-content></ng-content>\n                </div>",
                    styles: [':host {display: block;}', '.swiper-container {width: 100%;height: 100%;}']
                },] },
    ];
    /** @nocollapse */
    SwiperComponent.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
    ];
    SwiperComponent.propDecorators = {
        'config': [{ type: core_1.Input },],
        'initialize': [{ type: core_1.Input, args: ['initialize',] },],
    };
    return SwiperComponent;
}());
exports.SwiperComponent = SwiperComponent;
//# sourceMappingURL=swiper.component.js.map