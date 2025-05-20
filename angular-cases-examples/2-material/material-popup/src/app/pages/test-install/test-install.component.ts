import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpeedBumpService } from 'src/app/services/speed-bump.service';

@Component({
  selector: 'app-test-install',
  templateUrl: './test-install.component.html',
  styleUrls: ['./test-install.component.scss']
})
export class TestInstallComponent {
 constructor(private router: Router,private speedBumpService: SpeedBumpService) {}

 goToTestActivation() {
    this.router.navigate(['/test-activation']);
  }

    ngOnInit(): void {
  this.speedBumpService.initBackButtonInterceptor(() => {
    // Clean-up logic here
  });
}
}
