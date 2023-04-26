import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
// Source :https://stackoverflow.com/questions/62245639/filter-data-when-checking-multiple-checkboxes
@Component({
  selector: 'app-filter-check',
  templateUrl: './filter-check.component.html',
  styleUrls: ['./filter-check.component.scss']
})
export class FilterCheckComponent implements OnInit {
  constructor(private _http:HttpClient,private fb: FormBuilder) { }
  categoriesDropdown = [
    { category: "Playstation",selected: false }, 
    { category: "Xbox",selected: false }, 
    { category: "Nintendo",selected: false }, 
    { category: 'PC',selected: false }
  ]
  filteredStores=[];
  stores:any=[];
  myForm: FormGroup;
// filters data i.e contains search text as well as checkbox categories
filters = {
    searchText: '',
    categories: []
}
  ngOnInit() {
    this._http.get('http://localhost:5000/storesData').subscribe({
      next:(data)=>{
        console.log('stores_data',data);
        this.stores=data;
        this.filterStores(this.stores, this.filters)
      }
    })

    this.myForm = this.fb.group({
      categoriesToFilter: this.fb.array([]),
      name: ''
    });

  }
// Input filter event
searchByInput(event:Event){
  // this.filters.searchText = this.myForm.get('name')?.value;
   this.filters.searchText=(event.target as HTMLInputElement).value;
  // console.log("this.filters",this.filters)
  this.filterStores(this.stores, this.filters);
}
// get checkbox checked
onChange(email: string, isCheckedEvent: any) {
  // find selected names
  var allCheckboxesStatus=this.categoriesDropdown.filter(val=>{
    if(val.selected==true){
      return val.category;
    }else{
      return undefined;
    }
  })
  // remove undefined values
  var selectedCheckboxCategories=allCheckboxesStatus.map(val=>{
    return val.category;
  });
  this.filters.categories=selectedCheckboxCategories;
  console.log("allCheckboxesStatus",allCheckboxesStatus);
  console.log("selectedCheckboxCategories",selectedCheckboxCategories);    
  this.filterStores(this.stores, this.filters);
  }


  filterStores(stores, filters){
    console.log("stores, filters--filterStores",stores, filters);
    this.filteredStores = stores.filter(store => {
      console.log("store--filterStores",store)
      return store.name.toLowerCase().includes(filters.searchText.toLowerCase())&&
      ((filters.categories.includes(store.category.name))||(filters.categories.length === 0))
      // filters.categories.length === 0 //No selected categories, show all    
  });
    console.log("filteredStores",this.filteredStores);
  }
} 
