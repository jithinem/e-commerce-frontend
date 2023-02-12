import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproducts:[],searchkey:string,propName:string): any[] {
    if(!allproducts||searchkey==""||propName==""){
      return allproducts;
    }
    const result:any=[];
    allproducts.forEach((product:any)=>{
      if(product[propName].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(product);
      }
    })
    return result;
  }

}
