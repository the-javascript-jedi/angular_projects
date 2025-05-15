import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: false
})
export class AuthPage implements OnInit {
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onLogin() {
    console.log('Login clicked!');
    this.isLoading = true;
    this.authService.login();
    setTimeout(() => {
      this.router.navigateByUrl('/places/tabs/discover');
       this.isLoading = false;
    },1500)
  }
}
