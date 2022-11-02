import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { AuthModule } from '../auth.module';

=======
>>>>>>> 82e54edd1c02890d3a200717cb2f9beebe43952a

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

<<<<<<< HEAD
}
=======
}
>>>>>>> 82e54edd1c02890d3a200717cb2f9beebe43952a
