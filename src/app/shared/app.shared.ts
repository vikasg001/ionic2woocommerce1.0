/**
 * Created by npandey on 3/28/2017.
 */

import {Injectable, EventEmitter} from '@angular/core';
import {AlertController, Config, App} from "ionic-angular";
import {AppStorage} from "./app.storage";
import {NsCustomLoaderOptions} from "./NsCustomLoader/NsCustomLoader";
import {Subject} from "rxjs/Subject";

@Injectable()
export class AppShared {
  private eventBroadcast = new EventEmitter();
  private nsCustomLoading = new Subject<NsCustomLoaderOptions>();

  /**
   * @description This is AppShared Class used Globally in App.
   * @param app
   * @param config
   * @param alertCtrl
   */
  constructor(public app: App, public config: Config, public alertCtrl: AlertController) {
  }

  nsCustomLoadingSubject(): Subject<NsCustomLoaderOptions> {
    return this.nsCustomLoading;
  }

  /**
   * @description show app loading indicator
   */
  public showLoading(content?: string) {
    const loadingOptions: NsCustomLoaderOptions = {
      content: content || 'Please wait...',
      show: true
    };
    this.nsCustomLoading.next(loadingOptions);
  }

  /**
   * @description hide app loading indicator
   */
  public hideLoading() {
    const loadingOptions: NsCustomLoaderOptions = {
      show: false
    };
    this.nsCustomLoading.next(loadingOptions);
  }

  public showAlert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  public showConfirm(title: string, message: string, button: string[]) {
    let confirm = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: button[1],
          handler: () => {
            this.notConfirm();
          }
        },
        {
          text: button[0],
          handler: () => {
            this.confirm();
          }
        }
      ],
      enableBackdropDismiss: false
    });
    confirm.present();
  }

  public get userName(): string {
    return JSON.parse(AppStorage.getItem('userData')).FName;
  }

  private notConfirm() {
    this.eventBroadcast.emit({
      confirm: false
    });
  }

  private confirm() {
    this.eventBroadcast.emit({
      confirm: true
    });
  }

  /**
   *@description This method is used for initialise eventBroadcast
   * @returns {EventEmitter}
   */
  getSubscription() {
    return this.eventBroadcast;
  }


  unSubscribe() {
    this.eventBroadcast = new EventEmitter();
  }

}
