import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'ab-sweetalert',
  templateUrl: './sweetalert.component.html',
  styleUrls: ['./sweetalert.component.scss']
})
export class SweetalertComponent {

  constructor() { }

  SuccessAlert(){
    Swal.fire({
      icon: 'success',
      title: 'Haz ingresado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }

  ErrorAlert(){
    Swal.fire({
      title: 'Error!',
      text: 'Datos incorrectos',
      icon: 'error',
      confirmButtonText: 'Reintentar'
    })
  }


}
