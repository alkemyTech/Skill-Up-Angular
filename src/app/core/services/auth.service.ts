import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiBase;

  constructor(private http:HttpClient) { }


  public login(user:User):Observable<any>{
    return this.http.post<any>(this.baseUrl +'/auth/login',user);
  }

}
