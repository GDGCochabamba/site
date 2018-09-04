import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../core/shared/services/videos/videos.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  videos;

  constructor(
    private videosService: VideosService
  ) {
    this.videos = this.videosService.getRows();
  }

  ngOnInit() {
  }
}
