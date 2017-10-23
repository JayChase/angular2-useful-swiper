import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoConflictStyleCompatibilityMode, MatButtonModule, MatCardModule } from '@angular/material';
import { SwiperModule } from '../src/swiper.module';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        NoConflictStyleCompatibilityMode,
        MatCardModule,
        SwiperModule
    ],
    declarations: [
        AppComponent,
        DemoComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }