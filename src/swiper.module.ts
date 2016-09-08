import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';

import { SwiperComponent }   from './swiper.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    exports: [
        SwiperComponent
    ],
    declarations: [
        SwiperComponent
    ],
    providers: []
})
export class SwiperModule { }
