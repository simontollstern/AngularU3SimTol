import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { RouteGuardService as RouteGuard } from './route-guard.service';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [RouteGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'user/:name', component: SingleUserComponent, canActivate: [RouteGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
