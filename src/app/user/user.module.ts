import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AccountComponent } from './dashboard/account/account.component';
import { EarningstatusComponent } from './dashboard/earningstatus/earningstatus.component';
import { RouterModule } from '@angular/router';

import { UnderMaintainenceComponent } from './under-maintainence/under-maintainence.component';
import { ProjectListComponent } from './Project/project-list/project-list.component';
import { WorkingProjectsComponent } from './Project/working-projects/working-projects.component';
import { BiddingProjectsComponent } from './Project/bidding-projects/bidding-projects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProposalComponent } from './Project/proposal/proposal.component';


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    ProfileComponent,
    AccountComponent,
    EarningstatusComponent,

    UnderMaintainenceComponent,
     ProjectListComponent,
     WorkingProjectsComponent,
     BiddingProjectsComponent,
     ProposalComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    ReactiveFormsModule,

  ]
})
export class UserModule { }
