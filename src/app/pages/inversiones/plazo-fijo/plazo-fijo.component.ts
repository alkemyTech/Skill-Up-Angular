import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FixedDeposit, FixedDepositCreated, ResponseFixedDeposits } from 'src/app/core/interfaces/FixedDeposits';
import { TokenService } from 'src/app/core/services/token.service';



@Component({
  selector: 'app-plazo-fijo',
  templateUrl: './plazo-fijo.component.html',
  styleUrls: ['./plazo-fijo.component.scss']
})
export class PlazoFijoComponent implements OnInit {

  plazosFijosForm: FormGroup;

  plazofijo: FixedDeposit = {
    userId: 0,
    accountId: 0,
    amount: 0,
    creation_date: new Date(),
    closing_date: new Date(),
  }

  plazosFijos: FixedDepositCreated[];
  total: number = 0;


  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.listFixedDeposits();
  }



  initForm(): void {
    this.plazosFijosForm = new FormGroup<any>({
      userId: new FormControl(''),
      accountId: new FormControl(''),
      amount: new FormControl(''),
      creation_date: new FormControl(''),
      closing_date: new FormControl(''),
    });
  }


  createFixedDeposit() {
    const token = this.tokenService.getToken();
    const customHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<any>(`${environment.API_URL}/fixeddeposits`,this.plazosFijosForm.value, {headers: customHeaders})
    .subscribe((res) => {
      this.plazofijo = res;
      console.log('Plazo fijo creado', res);
      location.reload();

    })
  }


  listFixedDeposits() {
    return this.http.get<ResponseFixedDeposits>(`${environment.API_URL}/fixeddeposits`)
    .subscribe((res) => {

    console.log(res.data)
    this.plazosFijos = [...res.data];
    this.total = this.plazosFijos.reduce((counter, item) => Number(item.amount) + counter, 0)
    console.log(this.total)

    })

  }

  deleteById: number;
  status: string;

  deleteFixedDeposit(id: number) {
    this.deleteById = Number(id);
    console.log('deleteById',this.deleteById)
    const token = this.tokenService.getToken();
    const customHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete(`${environment.API_URL}/fixeddeposits/${this.deleteById}`, {headers: customHeaders})
    .subscribe(() => {this.status = 'Delete successful';location.reload();});


}
  }

