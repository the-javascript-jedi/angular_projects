import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nestedObjectsearch'
})
export class NestedObjectsearchPipe implements PipeTransform {

 transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.trim().toLowerCase().replace(/\s+/g, ''); // Trim whitespace and convert to lowercase
    return items.filter(item => {
      return this.itemContainsSearchText(item, searchText);
    });
  }

  private itemContainsSearchText(item: any, searchText: string): boolean {
    console.log("item",item)
    for (const key in item) {
      console.log("key",key)
      // add key!=='direction' to exclude the direction key in the search
      // if (item.hasOwnProperty(key)&&key!=='direction') {
      if (item.hasOwnProperty(key)) {
        const value = item[key];
        if (value && typeof value === 'object') {
          if (this.itemContainsSearchText(value, searchText)) {
            return true;
          }
        } else if (value !== null && typeof value === 'string' && value.trim().toLowerCase().replace(/\s+/g, '').includes(searchText)) {
          return true;
        }
      }
    }
    return false;
  }
}
