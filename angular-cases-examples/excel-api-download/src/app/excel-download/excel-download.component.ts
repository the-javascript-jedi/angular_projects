import { Component, OnInit } from '@angular/core';
import {ApiCallService} from '../service/api-call.service'

@Component({
  selector: 'app-excel-download',
  templateUrl: './excel-download.component.html',
  styleUrls: ['./excel-download.component.scss']
})
export class ExcelDownloadComponent implements OnInit {

  constructor(private _ApiCallService:ApiCallService) { }

  ngOnInit(): void {
  }

  downloadFile(){
    console.log("download clicked!");
    this._ApiCallService.postAndGetResponse().subscribe(
      fileData=>{
        const blob: any = new Blob([fileData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
let link = document.createElement("a");

      if (link.download !== undefined) {
        let url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", 'excel-download');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      }
    )
  }
}
