import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { ProjectComponent } from './component/project/project.component';
import { TaskComponent } from './component/task/task.component';

const routes: Routes = [{
  path: '', redirectTo : 'dashboard', pathMatch: 'full'
  }, {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
  }, {
    path: 'login', component: LoginComponent
  }, {
    path: 'register', component: RegisterComponent
  }, {
    path: 'user-project', component: ProjectComponent, canActivate: [AuthGuard]
  }, {
    path: 'task', component: TaskComponent, canActivate: [AuthGuard]
  }, {
    path: '**', component: NoPageFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
