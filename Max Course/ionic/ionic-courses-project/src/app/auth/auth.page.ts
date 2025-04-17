import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: false
})
export class AuthPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onLogin() {
    console.log('Login clicked!');
    this.authService.login();
  }
}
