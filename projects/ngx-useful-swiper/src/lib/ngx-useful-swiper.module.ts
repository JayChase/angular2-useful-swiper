import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper/swiper.component';

@NgModule({
  declarations: [SwiperComponent],
  imports: [CommonModule],
  exports: [SwiperComponent],
})
export class NgxUsefulSwiperModule {}
