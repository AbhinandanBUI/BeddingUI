import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentforbeddingComponent } from './contentforbedding/contentforbedding.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { WebsitesComponent } from './websites.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UndermaintainenceComponent } from './undermaintainence/undermaintainence.component';

const routes: Routes = [
  {
    path: '',
    component: WebsitesComponent,
    children: [
      {
        path: 'home',
        component: ContentforbeddingComponent,
        pathMatch: 'full',
      },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      {
        path: 'registration',
        component: RegistrationComponent,
        pathMatch: 'full',
      },

      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: UndermaintainenceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsitesRoutingModule {}
