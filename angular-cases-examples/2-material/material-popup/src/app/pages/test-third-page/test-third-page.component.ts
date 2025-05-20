import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpeedBumpService } from 'src/app/services/speed-bump.service';

@Component({
  selector: 'app-test-third-page',
  templateUrl: './test-third-page.component.html',
  styleUrls: ['./test-third-page.component.scss']
})
export class TestThirdPageComponent {
constructor(private router: Router,private speedBumpService: SpeedBumpService) {}
   goToNextPage() {
    this.router.navigate(['/test-activation']);
  }
}
