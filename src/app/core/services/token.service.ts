import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem('token', token);
    console.log('token desde token service', token)
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }

}