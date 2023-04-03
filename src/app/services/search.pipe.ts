import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAll'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    console.log(value, searchText)
    if (!searchText) {
      return value;
    }
    return value.filter((data: any) => this.matchValue(data, searchText));
  }

  matchValue(data: { [x: string]: string; }, value: string | RegExp) {
    return Object.keys(data).map((key) => {
      return new RegExp(value, 'gi').test(data[key]);
    }).some(result => result);
  }
}
