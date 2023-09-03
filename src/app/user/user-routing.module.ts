import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../websites/not-found/not-found.component';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './dashboard/account/account.component';
import { BiddingProjectsComponent } from './Project/bidding-projects/bidding-projects.component';
import { WorkingProjectsComponent } from './Project/working-projects/working-projects.component';
import { ProjectListComponent } from './Project/project-list/project-list.component';
import { ProposalComponent } from './Project/proposal/proposal.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'home',
        component: DashboardComponent,
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full',
      },
      {
        path: 'account',
        component: AccountComponent,
        pathMatch: 'full',
      },
      {
        path:'project',
        children:[
          {
            path: 'biddingproject',
            component: BiddingProjectsComponent,
            pathMatch: 'full',
          },

          {
            path: 'activeproject',
            component: WorkingProjectsComponent,
            pathMatch: 'full',
          },
          {
            path: 'pastproject',
            component: ProjectListComponent,
            pathMatch: 'full',
          },
          {
            path: 'bidnow/:id',
            component: ProposalComponent,
            pathMatch: 'full',
          },
        ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
