import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoComponent
  ],
  exports: [
    VideoComponent
  ]
})
export class SharedModule { }
