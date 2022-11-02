import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SweetalertComponent } from './components/alerts/sweetalert.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent,
    SweetalertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
