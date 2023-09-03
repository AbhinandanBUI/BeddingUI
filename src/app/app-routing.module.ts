import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'yourwork', loadChildren: () => import('./websites/websites.module').then(m => m.WebsitesModule) },
   { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
   { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
   { path: 'page-not-found', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  //  { path: 'user-maintainance',component: },
  // ... other routes
  {path:'**',redirectTo:'yourwork',pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
