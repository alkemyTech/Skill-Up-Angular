import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PlazoFijoComponent } from './pages/inversiones/plazo-fijo/plazo-fijo.component';
import { BancoRoutingModule } from './banco-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    PlazoFijoComponent
  ],
  imports: [
    CommonModule,
    BancoRoutingModule
  ]
})
export class BancoModule { }
