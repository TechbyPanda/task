import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString:string): any {
    console.log(value);
    if(filterString===''){
      return value;
    }
    

    const product:any[]=[];

    for(let i=0;i<value.length;i++){
      let productName:string = value[i].brand;
      if(productName.startsWith(filterString)){
        product.push(value[i]);
      }
    }
    
    return product;
  }
}











// const resultArray = [];
    // console.log(value,brand);
    // if(value.length === 0 || filterString === '' || brand === ''){
    //   console.log('inside if')
    //   return value;
    // }
    // for(const item of value){
    //   if(item[brand] == filterString){
    //     resultArray.push(item);
    //   }
    // }
    // console.log('.............')
    // console.log(resultArray);