import { Component } from '@angular/core';
import { SpeedBumpService } from '../../services/speed-bump.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-activation',
  templateUrl: './test-activation.component.html',
  styleUrls: ['./test-activation.component.scss']
})
export class TestActivationComponent {
constructor(private speedBumpService: SpeedBumpService,private router: Router) {}
ngOnInit(): void {
  this.speedBumpService.initBackButtonInterceptor(() => {
    // Clean-up logic here
  });
}

goToSecondPage(){
 this.router.navigate(['/test-second-page']);
}
}
