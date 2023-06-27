import { Component, OnInit ,VERSION} from '@angular/core';

@Component({
  selector: 'app-table-nested-row',
  templateUrl: './table-nested-row.component.html',
  styleUrls: ['./table-nested-row.component.scss']
})
export class TableNestedRowComponent implements OnInit {
 name = 'Angular ' + VERSION.major;

  covenants: any = [
    { provinceID: 1 },
    { provinceID: 2 },
    { provinceID: 3 },
    { provinceID: 4 },
    { provinceID: 5 },
  ];

  openCoverages = false;
  indexSelectedCoverage = 1;
  constructor() { }

  ngOnInit(): void {
      this.covenants.forEach((_covenants) => {
      _covenants.isExpanded = false;
    });
  }

   selectItemCoverages(index: number) {
    //this.openCoverages = this.openCoverages && this.indexSelectedCoverage === index ? false : true;
    //this.indexSelectedCoverage = index;
  }

}
