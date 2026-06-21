import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master-service';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-component',
  imports: [AsyncPipe, FormsModule, DatePipe, RouterLink],
  templateUrl: './search-component.html',
  styleUrl: './search-component.css',
})
export class SearchComponent implements OnInit {
  private masterService = inject(MasterService);
  location$: Observable<any[]> = new Observable<any[]>();
  searchObj: any = {
    fromLocation: '',
    toLocation: '',
    travelDate: '',
  };
  busList: any[] = [];

  ngOnInit(): void {
    this.getAllLocations();
  }

  getAllLocations() {
    this.location$ = this.masterService.getLocations();
  }

  onSearch() {
    const { fromLocation, toLocation, travelDate } = this.searchObj;
    this.masterService.searchBus(fromLocation, toLocation, travelDate).subscribe((res) => {
      this.busList = res;
    });
  }
}
