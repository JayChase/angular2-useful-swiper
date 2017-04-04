import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper.component';
var SwiperModule = (function () {
    function SwiperModule() {
    }
    return SwiperModule;
}());
export { SwiperModule };
SwiperModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    SwiperComponent
                ],
                declarations: [
                    SwiperComponent
                ],
                providers: []
            },] },
];
/** @nocollapse */
SwiperModule.ctorParameters = function () { return []; };
//# sourceMappingURL=swiper.module.js.map