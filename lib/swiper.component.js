"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SwiperComponent = (function () {
    function SwiperComponent(elementRef) {
        this.elementRef = elementRef;
        this.slideCount = 0;
    }
    SwiperComponent.prototype.ngOnInit = function () {
        this.swiperWrapper = this.elementRef.nativeElement.querySelector('.swiper-wrapper');
        this.slideCount = this.swiperWrapper.childElementCount;
        this.Swiper = new Swiper(this.elementRef.nativeElement.querySelector('.swiper-container'), this.config);
    };
    SwiperComponent.prototype.ngAfterViewChecked = function () {
        if (this.slideCount !== this.swiperWrapper.childElementCount) {
            this.slideCount = this.swiperWrapper.childElementCount;
            this.Swiper.update();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SwiperComponent.prototype, "config", void 0);
    SwiperComponent = __decorate([
        core_1.Component({
            selector: 'swiper',
            template: "<div class=\"swiper-container\">\n                    <ng-content></ng-content>\n                </div>",
            styles: [':host {display: block;}', '.swiper-container {width: auto;height: auto;}']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SwiperComponent);
    return SwiperComponent;
}());
exports.SwiperComponent = SwiperComponent;
//# sourceMappingURL=swiper.component.js.map