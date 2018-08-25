import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../core/shared/services/events/events.service';
import { VideosService } from '../../core/shared/services/videos/videos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mainEvent;
  randomEvent;
  randomVideo;

  constructor(
    private eventsService: EventsService,
    private videosService: VideosService
  ) {
    this.randomEvent = this.eventsService.getRow({ main: false });
    this.mainEvent = this.eventsService.getRow({ main: true });
    this.randomVideo = this.videosService.getRow();
  }

  ngOnInit() {
  }

}
