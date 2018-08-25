import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../core/shared/services/events/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mainEvent;
  randomEvent;

  constructor(
    private eventsService: EventsService
  ) {
    this.randomEvent = this.eventsService.getRow({ main: false });
    this.mainEvent = this.eventsService.getRow({ main: true });
  }

  ngOnInit() {
  }

}
