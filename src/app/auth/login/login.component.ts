import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/interfaces';
import { AuthService } from 'src/app/core/services/auth.service';
import { SweetalertComponent } from 'src/app/shared/components/alerts/sweetalert.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
sweetalert:SweetalertComponent=  new SweetalertComponent

    email:string='';
    password:string= '';

  constructor(private router:Router, private authService:AuthService) { }

  form: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  });

  send() {
  const {email, password}  = this.form.value
  this.authService.login(email, password).subscribe(data => {
     localStorage.setItem('token', data.accessToken)
    this.sweetalert.SuccessAlert();
    this.router.navigate(['banco/home'])
  }, error => {
    console.log(error)
    this.sweetalert.ErrorAlert()
  })

}
}
