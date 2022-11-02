import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SweetalertComponent } from 'src/app/alerts/sweetalert.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
sweetalert:SweetalertComponent=  new SweetalertComponent
  user = {
    email:'',
    password:''
  }
  constructor() { }

  form: FormGroup = new FormGroup({
    Email: new FormControl('',[Validators.required, Validators.email]),
    Password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  });

  logIn() {
    if (this.form.valid){
      this.user=this.form.value; 
     this.sweetalert.SuccessAlert();
      console.log(this.form.value);    
    }else{ 
      this.sweetalert.ErrorAlert();
    }
  }
  
}