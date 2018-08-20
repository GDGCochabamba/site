import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';
import { EventCardComponent } from './event-card/event-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoComponent,
    EventCardComponent
  ],
  exports: [
    VideoComponent,
    EventCardComponent
  ]
})
export class SharedModule { }
