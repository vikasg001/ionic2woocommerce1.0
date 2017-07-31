/**
 * Created by vgupta on 6/12/2017.
 */

import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
  name: 'productByCate'
})

export class ProductByCate implements PipeTransform {

  constructor() {

  }

  transform(items: any[], value: any) {
    return items.filter(item => {
        return (item.categories.indexOf(value) > -1);
      }
    )
  }
}
