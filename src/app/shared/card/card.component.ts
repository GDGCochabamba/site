import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

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
