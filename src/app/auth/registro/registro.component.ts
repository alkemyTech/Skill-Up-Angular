import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  //variables
  miFormulario: FormGroup = this.fb.group({
    first_name: ['', [Validators.required]],
    last_name:['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password:['', [Validators.required]],
  })
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth:AuthService) {
   }

   register(){
    const {first_name, email, password, last_name}  = this.miFormulario.value
    this.auth.registro(first_name, last_name, email, password).subscribe(data => {
    })
   }


  }
