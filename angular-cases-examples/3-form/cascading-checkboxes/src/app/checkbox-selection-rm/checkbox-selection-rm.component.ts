import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-selection-rm',
  templateUrl: './checkbox-selection-rm.component.html',
  styleUrls: ['./checkbox-selection-rm.component.scss']
})
export class CheckboxSelectionRmComponent implements AfterViewInit{
   ngAfterViewInit() {
    // disabling the checkbox - set the selected as true once all data is loaded
    this.selections.fingerprint.selected=true
    this.cdr.detectChanges();
  }
  constructor(private cdr: ChangeDetectorRef) {}
  
  selections: Selections = {
    fingerprint: {
      selected: false,
      children: ['hw_sw', 'feature']
    },
      hw_sw: {
        selected: true,
        parent: 'fingerprint',
        children: ['hardware', 'software']
      },
        hardware: {
          selected: true,
          parent: 'hw_sw'
        },
        software: {
          selected: true,
          parent: 'hw_sw'
        },       
      feature: {
        selected: true,
        parent: 'fingerprint',
      },
  }

   toggleCheckbox(checkbox, value): void {
    // console.log(checkbox, value);

    // change self...or use [(ngModel)]???
    this.selections[checkbox].selected = value;

    this.changeChildren(checkbox, value);
    this.changeParent(checkbox, value);
  }

  changeChildren(checkbox, value): void {
    if (this.selections[checkbox].children) {
      this.selections[checkbox].children.forEach(childCheckBox => {
        this.selections[childCheckBox].selected = value;
        this.changeChildren(childCheckBox, value);
      })
    }
  }
 changeParent(checkbox, value): void {

    // only if we have a parent do we care about siblings
    if (this.selections[checkbox].parent) {
      let parent = this.selections[this.selections[checkbox].parent];
      if (value) {
        // if it's true, we have to see if all siblings are true,
        // and if all siblings are true, then we can set the parent(s) true
        let siblingsThatAreFalse = parent.children.map(childKey => {
          // children are just an array of key strings so we get the selected property
          return {
            key: childKey,
            selected: this.selections[childKey].selected
          }
        }).filter(child => {
          // then we only keep the ones that are false
          return !child.selected;
        });
        // console.log(siblingsThatAreFalse);
        if (!siblingsThatAreFalse.length) {
          // if no siblings are left (meaning they are all true) we can set
          // parent true and then recurse up the hierarchy
          parent.selected = true;
          this.changeParent(this.selections[checkbox].parent, true);
        }
      } else {
        // if it's false, we can just set all parents to false
        parent.selected = false;
        this.changeParent(this.selections[checkbox].parent, false);
      }
    }
  }

  getSelectedNames(){
    console.log("selections",this.selections);
    var resultArray = [];
     for (const [key, value] of Object.entries(this.selections)) {
    var customObj = {};   
    this.selections[key]
    customObj["key"] = key;
    customObj["values"]=this.selections[key]
    customObj["selected"]=this.selections[key].selected    
    resultArray.push(customObj);
  }
  // console.log("resultArray",resultArray);
  // create api text string
  var checkedCheckboxesNames=resultArray.filter(val=>{
    if((val.selected==true)&&(val.key!=="hw_sw")&&(val.key!=="fingerprint")){
      return val;
    }    
  }).map(({key}) => key).join("-")
  console.log("checkedCheckboxesNames",checkedCheckboxesNames);
  }

}

/**
 * Could be an array, but and Index Signature makes sure each key is unique.
 */
interface Selections {
  [checkboxKey: string]: {
    selected: boolean;
    parent?: string;
    children?: string[];
  }
}