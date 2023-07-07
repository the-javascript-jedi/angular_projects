import { Component } from '@angular/core';

@Component({
  selector: 'app-cascading-checkbox',
  templateUrl: './cascading-checkbox.component.html',
  styleUrls: ['./cascading-checkbox.component.scss']
})
export class CascadingCheckboxComponent {
 selections: Selections = {
    a: {
      selected: true,
      children: ['a_a', 'a_b']
    },
      a_a: {
        selected: true,
        parent: 'a',
        children: ['a_a_a', 'a_a_b', 'a_a_c']
      },
        a_a_a: {
          selected: true,
          parent: 'a_a'
        },
        a_a_b: {
          selected: true,
          parent: 'a_a'
        },
        a_a_c: {
          selected: true,
          parent: 'a_a'
        },
      a_b: {
        selected: true,
        parent: 'a',
        children: ['a_b_a', 'a_b_b']
      },
        a_b_a: {
          selected: true,
          parent: 'a_b'
        },
        a_b_b: {
          selected: true,
          parent: 'a_b'
        },

    b: {
      selected: true,
      children: ['b_a', 'b_b']
    },
      b_a: {
        selected: true,
        parent: 'b',
        children: ['b_a_a', 'b_a_b']
      },
        b_a_a: {
          selected: true,
          parent: 'b_a'
        },
        b_a_b: {
          selected: true,
          parent: 'b_a'
        },
      b_b: {
        selected: true,
        parent: 'b'
      }
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