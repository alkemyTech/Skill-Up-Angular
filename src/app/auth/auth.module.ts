import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
=======
<<<<<<<< HEAD:src/app/pages/auth-registro/auth-registro.module.ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRegistroRoutingModule } from './auth-registro-routing.module';
import { RegistroComponent } from './registro/registro.component';

//materialui
import { MaterialModule } from 'src/app/material/material.module';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// import {MatButtonModule} from '@angular/material/button';

========
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';
>>>>>>>> 82e54edd1c02890d3a200717cb2f9beebe43952a:src/app/auth/auth.module.ts
>>>>>>> 82e54edd1c02890d3a200717cb2f9beebe43952a

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    AuthRoutingModule,
    MaterialModule
  ]
=======
<<<<<<<< HEAD:src/app/pages/auth-registro/auth-registro.module.ts
    AuthRegistroRoutingModule,
    // FormsModule,
     ReactiveFormsModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule
    MaterialModule
  ],

========
    AuthRoutingModule
  ]
>>>>>>>> 82e54edd1c02890d3a200717cb2f9beebe43952a:src/app/auth/auth.module.ts
>>>>>>> 82e54edd1c02890d3a200717cb2f9beebe43952a
})
export class AuthModule { }
