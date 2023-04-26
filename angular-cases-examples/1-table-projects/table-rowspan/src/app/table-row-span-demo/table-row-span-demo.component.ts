import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-row-span-demo',
  templateUrl: './table-row-span-demo.component.html',
  styleUrls: ['./table-row-span-demo.component.scss']
})
export class TableRowSpanDemoComponent implements OnInit {
dataList = [
    {
      pname: "abc",
      numbers: [123, 234]
    },
    {
      pname: "mno",
      numbers: [125, 237]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
