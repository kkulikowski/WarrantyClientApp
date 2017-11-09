
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

interface Credentials {
  username: string;
  password: string;
}

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  credentials: Credentials;

  constructor(private auth: AuthService) {}

  onLogin(credentials) {
    this.auth.login(credentials);
  }
}
