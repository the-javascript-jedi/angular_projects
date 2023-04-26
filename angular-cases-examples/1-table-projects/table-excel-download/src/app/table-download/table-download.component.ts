import { Component,OnInit } from '@angular/core';
import {TableDataService} from '../../services/table-data.service'
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table-download',
  templateUrl: './table-download.component.html',
  styleUrls: ['./table-download.component.scss']
})
export class TableDownloadComponent implements OnInit {
  tableData:any=[];
  fileName='ExcelSheet.xlsx';

  constructor(private _tableDataService:TableDataService){

  }

  ngOnInit(){
    this._tableDataService.getUsers().subscribe((response)=>{
        this.tableData=response;
        console.log("tableData",this.tableData);
    })
  }

  exportToExcel(){
    // pass here the table id
    let element=document.getElementById('excel-table');
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);

    // generate workbook and add worksheet
    const wb:XLSX.WorkBook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');

    // save to file
    XLSX.writeFile(wb,this.fileName);
  }
}

