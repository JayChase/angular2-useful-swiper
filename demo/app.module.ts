import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { MaterialModule } from '@angular/material';
import { SwiperModule } from '../src/swiper.module';

import { AppComponent }   from './app.component';
import { DemoComponent }   from './demo.component';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        SwiperModule
    ],
    declarations: [
        AppComponent,
        DemoComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }