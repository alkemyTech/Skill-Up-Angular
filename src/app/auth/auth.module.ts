import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
   
  ],
  
})
export class AuthModule { }
