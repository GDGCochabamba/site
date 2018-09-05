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

}
