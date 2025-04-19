import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) { }

  onLogOut() {
    console.log('Logout clicked!');
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
