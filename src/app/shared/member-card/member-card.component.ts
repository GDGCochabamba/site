import { Component, OnInit, Input } from '@angular/core';
import { GDGMember } from '../../core/shared/services/members/member.model';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  @Input()
  member: GDGMember;

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
      case 'Montaje de escenario':
        color = 'lightskyblue';
        break;
      case 'Swag':
        color = 'gold';
        break;
      case 'Marketing y ventas':
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
