import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input()
  url = '';

  @Input()
  image = '';

  constructor() { }

  ngOnInit() {
  }

}
