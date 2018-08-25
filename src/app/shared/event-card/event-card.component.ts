import { Component, OnInit, Input } from '@angular/core';
import { GDGEvent } from '../../core/shared/event.model';


@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input()
  event: GDGEvent;

  @Input()
  image = '';

  @Input()
  title = '';

  @Input()
  date = '';

  @Input()
  url = '';

  @Input()
  classDescription = '';

  constructor() {
  }

  ngOnInit() {
  }

}
