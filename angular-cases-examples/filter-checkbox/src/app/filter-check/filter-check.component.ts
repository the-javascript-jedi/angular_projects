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
  categoriesArray = [{ category: "Playstation" }, { category: "Xbox" }, { category: "Nintendo" }, { category: 'PC' }]
  filteredStores=[];
  stores:any=[];
  myForm: FormGroup;
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

searchByInput(){
  // console.log("this.nameForm.get('name')?.value",this.myForm.get('name')?.value);
  this.filters.searchText = this.myForm.get('name')?.value;
  // console.log("this.filters",this.filters)
  this.filterStores(this.stores, this.filters);
}
// get checkbox checked
onChange(email: string, isCheckedEvent: any) {
    let eventIsChecked=isCheckedEvent.target.checked;
    const emailFormArray = <FormArray>this.myForm.controls['categoriesToFilter'];

    if (eventIsChecked) {
      emailFormArray.push(new FormControl(email));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == email)
      emailFormArray.removeAt(index);
    }
    this.filters.categories=this.myForm.controls['categoriesToFilter'].value;
    console.log("this.filters",this.filters);
    this.filterStores(this.stores, this.filters);

  }


  filterStores(stores, filters){
    console.log("stores, filters--filterStores",stores, filters);
    this.filteredStores = stores.filter(store => {
      console.log("store--filterStores",store)
      return store.name.toLowerCase().includes(filters.searchText.toLowerCase())&&((filters.categories.includes(store.category.name))||(filters.categories.length === 0))
    // return store.name.toLowerCase().includes(filters.searchText.toLowerCase())
    //  &&
    //     (
    //         filters.categories.includes(store.category.name.toLowerCase()) ||
    //         filters.categories.length === 0 //No selected categories, show all
    //     )
    
  });
    console.log("filteredStores",this.filteredStores);
  }
} 
