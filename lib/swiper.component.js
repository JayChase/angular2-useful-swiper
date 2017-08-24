"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//declare var Swiper: any;
var SwiperComponent = (function () {
    function SwiperComponent(elementRef, changeDetectorRef) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
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
        if (!this.swiper) {
            // if rendered on server querySelector is undefined
            if (this.elementRef.nativeElement.querySelector) {
                this.swiperWrapper = this.elementRef.nativeElement.querySelector('.swiper-wrapper');
                this.slideCount = this.swiperWrapper.childElementCount;
                this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('swiper > div'), this.config);
                this.changeDetectorRef.detectChanges();
            }
            this.shouldInitialize = false;
        }
    };
    SwiperComponent.prototype.ngAfterViewChecked = function () {
        if (this.shouldInitialize) {
            this.setup();
        }
        if (this.swiperWrapper && this.slideCount !== this.swiperWrapper.childElementCount) {
            this.slideCount = this.swiperWrapper.childElementCount;
            this.swiper.update();
        }
    };
    return SwiperComponent;
}());
SwiperComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'swiper',
                template: "<div class=\"swiper-container\">\n                    <ng-content></ng-content>\n                </div>",
                styles: [':host {display: block;}', ':host > div {width: 100%;height: 100%;}']
            },] },
];
/** @nocollapse */
SwiperComponent.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
SwiperComponent.propDecorators = {
    'config': [{ type: core_1.Input },],
    'initialize': [{ type: core_1.Input, args: ['initialize',] },],
};
exports.SwiperComponent = SwiperComponent;
//# sourceMappingURL=swiper.component.js.map