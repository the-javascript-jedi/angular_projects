import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nestedObjectsearch'
})
export class NestedObjectsearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      // Modify this condition based on your table structure
      return Object.values(item).some(val =>
        val.toString().toLowerCase().includes(searchText)
      );
    });
  }

}
