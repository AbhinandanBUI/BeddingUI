import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsitesRoutingModule } from './websites-routing.module';
import { WebsitesComponent } from './websites.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentforbeddingComponent } from './contentforbedding/contentforbedding.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UndermaintainenceComponent } from './undermaintainence/undermaintainence.component';


@NgModule({
  declarations: [
    WebsitesComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    ContentforbeddingComponent,
    NotFoundComponent,
    UndermaintainenceComponent
  ],
  imports: [
    CommonModule,
    WebsitesRoutingModule,
    RouterModule
  ],

})
export class WebsitesModule { }
