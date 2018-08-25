import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './members-routing.module';
import { MemberListComponent } from './member-list/member-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MemberRoutingModule
  ],
  declarations: [MemberListComponent]
})
export class MembersModule { }
