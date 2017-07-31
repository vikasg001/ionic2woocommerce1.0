/**
 * Created by npandey on 3/28/2017.
 */

import {Injectable} from '@angular/core';
@Injectable()
export class AppStorage {
  constructor() {
  }

  public static setItem(key: string, data: any) {
    return localStorage.setItem(key, JSON.stringify(data));
  }

  public static getItem(key: string) {
    return (typeof localStorage.getItem(key) === 'string' ? JSON.parse(localStorage.getItem(key)) : localStorage.getItem(key));
  }

  public static removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public static updateItemKey(item: string, key: string, data: any) {
    let getItem = this.getItem(item);
    getItem[key] = data;
    this.setItem(item, getItem);
  }
}
