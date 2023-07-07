import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-selection-rm',
  templateUrl: './checkbox-selection-rm.component.html',
  styleUrls: ['./checkbox-selection-rm.component.scss']
})
export class CheckboxSelectionRmComponent {
  selections: Selections = {
    fingerprint: {
      selected: true,
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
    console.log("selections",this.selections)
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