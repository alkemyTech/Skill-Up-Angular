import { AngularMaterialModule } from './components/modules/angular-material/angular-material.module';
import { LoaderComponent } from './components/loader/loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    LoaderComponent
],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class SharedModule { }
