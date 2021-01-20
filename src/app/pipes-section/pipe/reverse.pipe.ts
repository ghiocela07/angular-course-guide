import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  public transform(value: any): any {
	  return value.split('').reverse().join('');
  }

  // private reverse(stringToReverse: string){
  //   const stringToReverse.split('');
  //   const reverseString =
  // }

}
