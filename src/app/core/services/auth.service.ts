import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  RegisterBodyUser,
  LoginBodyUser,
} from '../interfaces/UserCredentials.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from '../interfaces/ApiResponse.interface';
import { environment } from 'src/environments/environment';
import { access } from 'fs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
    ) {}

  createUser(user: RegisterBodyUser): Observable<any> {
    return this.http.post(`${environment.API_URL}/users`, user);
  }

  login(user: LoginBodyUser): Observable<any> {
    return this.http
      .post<LoginResponse>(`${environment.API_URL}/auth/login`, user)
      .pipe(
        map((res) => {
          this.tokenService.saveToken(res.accessToken)
        })
      );
  }

  createAcount(token: string): Observable<any> {
    const customHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(
      `${environment.API_URL}/accounts`,
      {
        creationDate: new Date(),
        money: 0,
        isBlocked: false,
      },
      { headers: customHeaders }
    );
  }
}
