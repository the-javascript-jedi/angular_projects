import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpeedBumpService } from 'src/app/services/speed-bump.service';

@Component({
  selector: 'app-test-second-page',
  templateUrl: './test-second-page.component.html',
  styleUrls: ['./test-second-page.component.scss']
})
export class TestSecondPageComponent {
constructor(private router: Router,private speedBumpService: SpeedBumpService) {}
   goToThirdPage() {
    this.router.navigate(['/test-third-page']);
  }
}
