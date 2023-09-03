import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 import { NotificationComponent } from './AccountSetting/notification/notification.component';
import { ConnectionComponent } from './AccountSetting/connection/connection.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegistrationComponent } from './Authentication/registration/registration.component';
import { ForgetPasswordComponent } from './Authentication/forget-password/forget-password.component';
import { NotFoundComponent } from './MISC/not-found/not-found.component';
import { UnerMaintainenceComponent } from './MISC/uner-maintainence/uner-maintainence.component';
import { CardsComponent } from './cards/cards.component';
import { AccordionComponent } from './UserInterface/accordion/accordion.component';
import { AlertsComponent } from './UserInterface/alerts/alerts.component';
import { BadgesComponent } from './UserInterface/badges/badges.component';
import { ButtonsComponent } from './UserInterface/buttons/buttons.component';
import { CardouselComponent } from './UserInterface/cardousel/cardousel.component';
import { CollapseComponent } from './UserInterface/collapse/collapse.component';
import { DropdownsComponent } from './UserInterface/dropdowns/dropdowns.component';
import { FooterComponent } from './UserInterface/footer/footer.component';
import { ListGroupsComponent } from './UserInterface/list-groups/list-groups.component';
import { ModelsComponent } from './UserInterface/models/models.component';
import { NavbardComponent } from './UserInterface/navbard/navbard.component';
import { OffcanvasComponent } from './UserInterface/offcanvas/offcanvas.component';
import { PagginationComponent } from './UserInterface/paggination/paggination.component';
import { ProgressComponent } from './UserInterface/progress/progress.component';
import { SpinnersComponent } from './UserInterface/spinners/spinners.component';
import { TabsPillsComponent } from './UserInterface/tabs-pills/tabs-pills.component';
import { ToastsComponent } from './UserInterface/toasts/toasts.component';
import { TooltipAndPopoverComponent } from './UserInterface/tooltip-and-popover/tooltip-and-popover.component';
import { TypographyComponent } from './UserInterface/typography/typography.component';
import { TableComponent } from './UserInterface/table/table.component';
import { BasicComponent } from './forms/basic/basic.component';
import { InputGroupComponent } from './forms/input-group/input-group.component';
import { VerticalComponent } from './forms/vertical/vertical.component';
import { HorizontalComponent } from './forms/horizontal/horizontal.component';
import { AccountComponent } from './AccountSetting/account/account.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
AccountComponent,
    NotificationComponent,
    ConnectionComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    NotFoundComponent,
    UnerMaintainenceComponent,
    CardsComponent,
    AccordionComponent,
    AlertsComponent,
    BadgesComponent,
    ButtonsComponent,
    CardouselComponent,
    CollapseComponent,
    DropdownsComponent,
    FooterComponent,
    ListGroupsComponent,
    ModelsComponent,
    NavbardComponent,
    OffcanvasComponent,
    PagginationComponent,
    ProgressComponent,
    SpinnersComponent,
    TabsPillsComponent,
    ToastsComponent,
    TooltipAndPopoverComponent,
    TypographyComponent,
    TableComponent,
    BasicComponent,
    InputGroupComponent,
    VerticalComponent,
    HorizontalComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule
  ]
})
export class PagesModule { }
