import { Component, OnInit, Input } from '@angular/core';
import { GDGEvent } from '../../core/shared/services/events/event.model';


@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input()
  event: GDGEvent;

  constructor() {
  }

  ngOnInit() {
  }

}
