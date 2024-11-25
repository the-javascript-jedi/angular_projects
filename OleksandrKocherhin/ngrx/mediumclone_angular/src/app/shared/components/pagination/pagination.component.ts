import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UtilsService } from 'src/app/auth/services/utils.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  standalone:true,
  imports: [CommonModule,RouterLink,PaginationComponent],

})
export class PaginationComponent implements OnInit{
  @Input() total:number=0;
  @Input() limit:number=20;
  @Input() currentPage:number=1;
  @Input() url:string='';
  pagesCount: number = 1
  pages: number[] = []

  constructor(private utilsService: UtilsService) {}
  
  ngOnInit(): void {

    this.pagesCount = Math.ceil(this.total / this.limit)
    this.pages =
      this.pagesCount > 0 ? this.utilsService.range(1, this.pagesCount) : []
  }
}
