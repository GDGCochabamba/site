import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../core/shared/services/members/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  members;

  constructor(
    private membersService: MembersService
  ) {
    this.members = this.membersService.getRows();
  }

  ngOnInit() {
  }

}
