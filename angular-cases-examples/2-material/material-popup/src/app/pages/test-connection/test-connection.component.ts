import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpeedBumpService } from '../../services/speed-bump.service';

@Component({
  selector: 'app-test-connection',
  templateUrl: './test-connection.component.html',
  styleUrls: ['./test-connection.component.scss']
})
export class TestConnectionComponent {
  constructor(private router: Router,private speedBumpService: SpeedBumpService) {}
 goToTestInstall() {
    this.router.navigate(['/test-install']);
  }

  ngOnInit(): void {
  this.speedBumpService.initBackButtonInterceptor(() => {
    // Clean-up logic here
  });
}
}
