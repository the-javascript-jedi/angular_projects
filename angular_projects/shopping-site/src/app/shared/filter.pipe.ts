import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // value is the array which we pass to be filtered
  // filterString - what we need to be filtered with
  //property to be filtered - by title,by modal product
  transform(value:any[],filterString:string,propName:string):any[]{
    const result:any=[];
    // if no arguments return the whole data
    if(!value||filterString===''||propName===""){
      return value;
    }
    value.forEach((a:any)=>{
      console.log("a-forEach",a);
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
         result.push(a);
      }
    })
    return result;
  }

}
