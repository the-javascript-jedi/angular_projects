import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: false
})
export class AuthPage implements OnInit {
  isLoading = false;

  constructor(private authService: AuthService, private router: Router,private loadingCtrl:LoadingController) { }

  ngOnInit() {
  }
  onLogin() {
    console.log('Login clicked!');
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl.create({
      message: 'Logging in...',
      spinner: 'bubbles',
      duration: 1500
    }).then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
      this.router.navigateByUrl('/places/tabs/discover');
      this.isLoading = false;
    },1500)
    });
  }
}
