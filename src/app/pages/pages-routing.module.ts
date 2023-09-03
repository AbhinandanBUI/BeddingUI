import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './MISC/not-found/not-found.component';
import { AccountComponent } from './AccountSetting/account/account.component';
import { NotificationComponent } from './AccountSetting/notification/notification.component';
import { ConnectionComponent } from './AccountSetting/connection/connection.component';
import { CardsComponent } from './cards/cards.component';
import { AccordionComponent } from './UserInterface/accordion/accordion.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegistrationComponent } from './Authentication/registration/registration.component';
import { ForgetPasswordComponent } from './Authentication/forget-password/forget-password.component';
import { BasicComponent } from './forms/basic/basic.component';
import { InputGroupComponent } from './forms/input-group/input-group.component';
import { VerticalComponent } from './forms/vertical/vertical.component';
import { HorizontalComponent } from './forms/horizontal/horizontal.component';
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


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
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
        path: 'notification',
        component: NotificationComponent,
        pathMatch: 'full',
      },

      {
        path: 'connection',
        component: ConnectionComponent,
        pathMatch: 'full',
      },

      {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full',
      },
      {
        path: 'card',
        component: CardsComponent,
        pathMatch: 'full',
      },
      {
        path:'login',
        component:LoginComponent,
        pathMatch:'full'
      },
      {
        path:'registration',
        component:RegistrationComponent,
        pathMatch:'full'
      },
      {
        path:'forget-password',
        component:ForgetPasswordComponent,
        pathMatch:'full'
      },
      {
        path:'basic',
        component:BasicComponent,
        pathMatch:'full'
      },
      {
        path:'input',
        component:InputGroupComponent,
        pathMatch:'full'
      },
      {
        path:'vertical',
        component:VerticalComponent,
        pathMatch:'full'
      },

      {
        path:'horizontal',
        component:HorizontalComponent,
        pathMatch:'full'
      },
      {
        path: 'accordion',
        component: AccordionComponent,
        pathMatch: 'full',
      },
      {
        path: 'alert',
        component: AlertsComponent,
        pathMatch: 'full',
      },
      {
        path: 'badges',
        component: BadgesComponent,
        pathMatch: 'full',
      },
      {
        path: 'button',
        component: ButtonsComponent,
        pathMatch: 'full',
      },
      {
        path: 'carousel',
        component: CardouselComponent,
        pathMatch: 'full',
      },
      {
        path: 'collapse',
        component: CollapseComponent,
        pathMatch: 'full',
      },
      {
        path: 'dropdowns',
        component: DropdownsComponent,
        pathMatch: 'full',
      },
      {
        path: 'footer',
        component: FooterComponent,
        pathMatch: 'full',
      },
      {
        path: 'listgroup',
        component: ListGroupsComponent,
        pathMatch: 'full',
      },
      {
        path: 'model',
        component: ModelsComponent,
        pathMatch: 'full',
      },
      {
        path: 'navbar',
        component: NavbardComponent,
        pathMatch: 'full',
      },
      {
        path: 'offcanvas',
        component: OffcanvasComponent,
        pathMatch: 'full',
      },
      {
        path: 'pagination',
        component: PagginationComponent,
        pathMatch: 'full',
      },
      {
        path: 'progress',
        component: ProgressComponent,
        pathMatch: 'full',
      },
      {
        path: 'spinner',
        component: SpinnersComponent,
        pathMatch: 'full',
      },
      {
        path: 'toast',
        component: ToastsComponent,
        pathMatch: 'full',
      },
      {
        path: 'tabs',
        component: TabsPillsComponent,
        pathMatch: 'full',
      },
      {
        path: 'tooltip',
        component: TooltipAndPopoverComponent,
        pathMatch: 'full',
      },
      {
        path: 'table',
        component: TableComponent,
        pathMatch: 'full',
      },
      {
        path: 'trypography',
        component: TypographyComponent,
        pathMatch: 'full',
      },

      {
        path: '',
        redirectTo: 'dashboard',
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
export class PagesRoutingModule { }
