import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  login(credentials) {
    this.http.post('localhost:3000/auth/login', credentials)
      .map(res => res.json())
      .subscribe(
        // We're assuming the response will be an object
        // with the JWT on an id_token key
        data => localStorage.setItem('id_token', data.id_token),
        error => console.log(error)
      );
  }

  loggedIn() {
    return tokenNotExpired();
  }
}