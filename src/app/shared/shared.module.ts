import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoComponent,
    CardComponent
  ],
  exports: [
    VideoComponent,
    CardComponent
  ]
})
export class SharedModule { }
