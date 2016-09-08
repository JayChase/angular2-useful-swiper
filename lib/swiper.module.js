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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var swiper_component_1 = require('./swiper.component');
var SwiperModule = (function () {
    function SwiperModule() {
    }
    SwiperModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule
            ],
            exports: [
                swiper_component_1.SwiperComponent
            ],
            declarations: [
                swiper_component_1.SwiperComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], SwiperModule);
    return SwiperModule;
}());
exports.SwiperModule = SwiperModule;
//# sourceMappingURL=swiper.module.js.map