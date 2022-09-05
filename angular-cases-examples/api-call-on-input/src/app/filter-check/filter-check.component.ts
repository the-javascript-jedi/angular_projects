import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-check',
  templateUrl: './filter-check.component.html',
  styleUrls: ['./filter-check.component.scss']
})
export class FilterCheckComponent implements OnInit {

  constructor(private _http:HttpClient,private fb: FormBuilder) { }
  categoriesArray = [{ category: "playstation" }, { category: "xbox" }, { category: "nintendo" }, { category: 'pc' }]
  filteredStores=[];
  
  myForm: FormGroup;

  ngOnInit() {
    this._http.get('http://localhost:5000/storesData').subscribe({
      next:(data)=>{
        console.log('stores_data',data)        
      }
    })

    this.myForm = this.fb.group({
      useremail: this.fb.array([])
    });
  }
filters = {
    searchText: '',
    categories: []
}
clickMe(){
  console.log("this.myForm.controls['useremail']",this.myForm.controls['useremail'].value)
}
// get checkbox checked
onChange(email: string, isCheckedEvent: any) {
    let eventIsChecked=isCheckedEvent.target.checked;
    const emailFormArray = <FormArray>this.myForm.controls['useremail'];

    if (eventIsChecked) {
      emailFormArray.push(new FormControl(email));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == email)
      emailFormArray.removeAt(index);
    }
    this.filters.categories=this.myForm.controls['useremail'].value;
    console.log("this.filters.categories",this.filters.categories)
  }


  filterStores (stores, filters){
    console.log("stores, filters",stores, filters);
    this.filteredStores = stores.filter(store => (
        store.name.toLowerCase().includes(filters.searchText.toLowerCase()) &&
        (
            filters.categories.includes(store.category.name.toLowerCase()) ||
            filters.categories.length === 0 //No selected categories, show all
        )
    ));
    console.log("filteredStores",this.filteredStores);
  }
} 
