import { Component } from '@angular/core';
import { SpeedBumpService } from '../../services/speed-bump.service';

@Component({
  selector: 'app-test-account-summary',
  templateUrl: './test-account-summary.component.html',
  styleUrls: ['./test-account-summary.component.scss']
})
export class TestAccountSummaryComponent {
constructor(private speedBumpService: SpeedBumpService) {}
ngOnInit(): void {
  this.speedBumpService.initBackButtonInterceptor(() => {
    // Clean-up logic here
  });
}
}
