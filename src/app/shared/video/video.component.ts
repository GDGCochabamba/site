import { Component, OnInit, Input } from '@angular/core';
import { GDGVideo } from '../../core/shared/services/videos/video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input()
  video: GDGVideo;

  constructor() { }

  ngOnInit() {
  }

}
