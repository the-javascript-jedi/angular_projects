import { Component } from '@angular/core';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(public generalService:GeneralService){

  }
}
