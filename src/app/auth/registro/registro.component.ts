import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthModule } from '../auth.module';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  //variables
  registerForm: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {
    this.registerForm = this.fb.group({
      fName:[ "", Validators.required ],
      lName:[ "", Validators.required ],
      email: [ "", Validators.required ],
      password: [ "", Validators.required ],


    });
   }

  ngOnInit(): void {
  }

  register(){
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }
  }

}
