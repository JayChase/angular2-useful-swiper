"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var swiper_component_1 = require("./swiper.component");
var SwiperModule = (function () {
    function SwiperModule() {
    }
    return SwiperModule;
}());
SwiperModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule
                ],
                exports: [
                    swiper_component_1.SwiperComponent
                ],
                declarations: [
                    swiper_component_1.SwiperComponent
                ],
                providers: []
            },] },
];
/** @nocollapse */
SwiperModule.ctorParameters = function () { return []; };
exports.SwiperModule = SwiperModule;
var swiper_component_2 = require("./swiper.component");
exports.SwiperComponent = swiper_component_2.SwiperComponent;
//# sourceMappingURL=swiper.module.js.map