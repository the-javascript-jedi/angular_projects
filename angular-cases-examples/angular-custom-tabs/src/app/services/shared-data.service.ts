import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }
  selectedParentTabName="";
  selectedChildTabName="";
    // get parent tab data
    getParentTabname():string {
        return this.selectedParentTabName;
    }
    // set parent tab data
    setParentTabname(value: string) {
        this.selectedParentTabName = value;
    }

    // get child tab data
    getChildTabname():string {
        return this.selectedChildTabName;
    }
    // set child tab data
    setChildTabname(value: string) {
        this.selectedChildTabName = value;
    }

    // reset data
    resetSelectedTabs(){
      this.selectedParentTabName = '';
      this.selectedChildTabName = '';
    }
}
