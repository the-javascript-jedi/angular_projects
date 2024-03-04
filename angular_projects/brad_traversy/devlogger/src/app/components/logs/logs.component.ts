import { Component } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent {
  logs=[];
  
  constructor(private _logsService:LogService){

  }
  
  ngOnInit(){
    this.logs=this._logsService.getLogs()
   
  }
    
}
