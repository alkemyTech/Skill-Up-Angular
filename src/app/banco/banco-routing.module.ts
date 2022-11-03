import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlazoFijoComponent } from './pages/inversiones/plazo-fijo/plazo-fijo.component';

const routes:Routes =  [
  {
    path:'',
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'plazos',
        component:PlazoFijoComponent
      },
      {
        path:'**',
        redirectTo:'home'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class BancoRoutingModule { }
