"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var swiper_component_1 = require('./swiper.component');
var SwiperModule = (function () {
    function SwiperModule() {
    }
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
    SwiperModule.ctorParameters = [];
    return SwiperModule;
}());
exports.SwiperModule = SwiperModule;
//# sourceMappingURL=swiper.module.js.map