import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(private _authService:AuthService,private _router:Router) { }

  ngOnInit(): void {
    this._authService.signout().subscribe(()=>{
      // Navigate the user to signin component
      this._router.navigateByUrl('/');
    })
  }

}
