import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideoListComponent } from './video-list/video-list.component';

@NgModule({
  imports: [
    CommonModule,
    VideosRoutingModule
  ],
  declarations: [VideoListComponent]
})
export class VideosModule { }
