import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  @Input()
  image = '';

  @Input()
  fullname = '';

  @Input()
  orgTeams: any[];

  @Input()
  socialLinks: [{
    url: '',
    icon: ''
  }];

  constructor() { }

  ngOnInit() {
  }

  getColor(orgTeam): string {
    let color = '';
    switch (orgTeam) {
      case 'Coordinación con speakers':
        color = 'purple';
        break;
      case 'Diseño y redes sociales':
        color = 'orange';
        break;
      case 'Producción audiovisual':
        color = 'red';
        break;
      case 'Comunicación':
        color = 'green';
        break;
      case 'Logística - sponsorship':
        color = 'blue';
        break;
      case 'Logística de ubicaciones':
        color = 'lightskyblue';
        break;
      case 'Swag':
        color = 'yellow';
        break;
      case 'Ventas':
        color = 'pink';
        break;
      case 'Web':
        color = 'maroon';
        break;
      default:
        color = 'gray';
        break;
    }
    return color;
  }
}
