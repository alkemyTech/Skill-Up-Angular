import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiBase;

  constructor(private http: HttpClient) {}

  registro(
    first_name: string,
    last_name: string,
    email: string,
    password: string,

  ) {
    const url = `${this.baseUrl}/users`;
    const body = {first_name, last_name, email, password}
    return this.http.post(url, body)
  }

  login(email:string, password:string){
    const url = `${this.baseUrl}/auth/login`;
    const body = {email, password}
    return this.http.post(url, body)

  }
}
