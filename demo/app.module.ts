import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdInputModule } from '@angular2-material/input';

import { SwiperModule } from '../src/swiper.module';

import { AppComponent }   from './app.component';
import { DemoComponent }   from './demo.component';

@NgModule({
    imports: [
        BrowserModule,
        MdCardModule,
        MdToolbarModule,
        MdButtonModule,
        SwiperModule
    ],
    declarations: [
        AppComponent,
        DemoComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }