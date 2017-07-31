import {Injectable} from "@angular/core";
import {WooClass} from "../../../app/wooClass";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';
@Injectable()

export class HomeService {

  constructor(public wooClass: WooClass) {

  }

  getCategories(): Observable<any> {
    return Observable.fromPromise(new Promise((resolve, reject) => {
      this.wooClass.getWooConfig().get('products/categories', (err, data, res) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(res));
      });
    }));
  }


  getProductList(options?: any): Observable<any> {
    return Observable.fromPromise(new Promise((resolve, reject) => {
      this.wooClass.getWooConfig().get('products', (err, data, res) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(res));
      });
    }));
  }

  getUserRegister(inputData: any): Observable<any> {
    return Observable.fromPromise(new Promise((resolve, reject) => {
      console.log(JSON.stringify(inputData));
      this.wooClass.getWooConfig().post('products', JSON.stringify(inputData), (err, data, res) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(res));
      });
    }));
  }


}
