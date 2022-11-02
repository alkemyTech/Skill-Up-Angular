import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRegistroRoutingModule } from './auth-registro-routing.module';
import { RegistroComponent } from './registro/registro.component';

//materialui
import { MaterialModule } from 'src/app/material/material.module';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRegistroRoutingModule,
    // FormsModule,
     ReactiveFormsModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule
    MaterialModule
  ],

})
export class AuthRegistroModule { }
