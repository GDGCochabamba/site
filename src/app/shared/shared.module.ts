import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';
import { EventCardComponent } from './event-card/event-card.component';
import { MemberCardComponent } from './member-card/member-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoComponent,
    EventCardComponent,
    MemberCardComponent
  ],
  exports: [
    VideoComponent,
    EventCardComponent,
    MemberCardComponent
  ]
})
export class SharedModule { }
