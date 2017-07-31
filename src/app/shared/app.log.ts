/**
 * Created by npandey on 3/28/2017.
 */

import {Injectable} from '@angular/core';

@Injectable()
export class AppLogger {
  constructor() {
  }

  static get debug() {
    return console.debug.bind(console);
  }

  static get log() {
    return console.log.bind(console);
  }

  static get warn() {
    return console.warn.bind(console);
  }

  static get info() {
    return console.info.bind(console);
  }

  static get error() {
    return console.error.bind(console);
  }
}
