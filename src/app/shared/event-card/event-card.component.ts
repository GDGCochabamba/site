import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
