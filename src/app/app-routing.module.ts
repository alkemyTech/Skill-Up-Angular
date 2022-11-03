import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './banco/pages/home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'banco',
    loadChildren: () => import('./banco/banco.module').then(m => m.BancoModule),
    canLoad: [AuthGuard]
  },
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  }
  ,
  {
    path:'404',
    component:PageNotFoundComponent
  },
  {
    path:'**',
    redirectTo:'404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
