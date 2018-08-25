import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events;
  mainEvent;

  constructor(
    private eventsService: EventsService
  ) {
    // We could use this way to handle filters inside collections
    // const { data, subject } = this.eventsService.start({ main: false });
    // this.events = data;
    // this.eventsSubject = subject;
    // this.mainEvent = this.eventsService.start({ main: false, limit: 1 }).data;
    this.events = this.eventsService.getRows({ main: false });
    this.mainEvent = this.eventsService.getRow({ main: true });
  }

  ngOnInit() {
  }

}
