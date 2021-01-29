import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_m/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/';
  constructor(private httpClient: HttpClient) { }

  register(person: User) {
    return this.httpClient.post(`${this.baseUrl}user/register`, person);
    
  }

  login(person: User) {
    return this.httpClient.post(`${this.baseUrl}user/login`,{email:person.email,password:person.password})
  }
}
