import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Login} from "../login/login";
import {HomeService} from "../home/shared/home.service";


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class Signin {
  public username: any;
  public email: any;
  public password: any;
  public first_name: any;
  public last_name: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public homeService: HomeService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signin');
  }

  onLogin() {
    this.navCtrl.setRoot(Login);
  }


  submit() {
    let options = {
      "customer": {
        "email": "john.doe@example.com",
        "first_name": "John",
        "last_name": "Doe",
        "username": "john.doe",
        "billing_address": {
          "first_name": "John",
          "last_name": "Doe",
          "company": "",
          "address_1": "969 Market",
          "address_2": "",
          "city": "San Francisco",
          "state": "CA",
          "postcode": "94103",
          "country": "US",
          "email": "john.doe@example.com",
          "phone": "(555) 555-5555"
        },
        "shipping_address": {
          "first_name": "John",
          "last_name": "Doe",
          "company": "",
          "address_1": "969 Market",
          "address_2": "",
          "city": "San Francisco",
          "state": "CA",
          "postcode": "94103",
          "country": "US"
        }
      }
    }

    this.homeService.getUserRegister(options).subscribe(data => this.onStateSuccess(data), error => this.onStateError(error));
  }

  private onStateSuccess(data: any) {
    console.log(data);
  }

  private onStateError(error: any) {
    console.log(error);
  }
}
