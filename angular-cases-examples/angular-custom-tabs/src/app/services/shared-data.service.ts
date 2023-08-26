import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }
    // get parent tab data
    getParentTabname():string {
        let parentTabName = localStorage.getItem("parentTab");
        return parentTabName;
    }
    // set parent tab data
    setParentTabname(value: string) {
        localStorage.setItem("parentTab", value);
        // this.selectedParentTabName = value;
    }

    // get child tab data
    getChildTabname():string {
        let childTabName = localStorage.getItem("childTab");
        return childTabName;
    }
    // set child tab data
    setChildTabname(value: string) {
         localStorage.setItem("childTab", value);
    }

    // reset parent tab
    resetSelectedParentTab(){
      localStorage.removeItem("parentTab");
    }
    // reset child tab
    resetSelectedChildTab(){
      localStorage.removeItem("childTab");
    }
}
