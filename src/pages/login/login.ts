import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import {HomePage} from "../home/home";
import {Signin} from "../signin/signin";



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login(){
    this.navCtrl.setRoot(HomePage);
  }

  onRegister(){
    this.navCtrl.setRoot(Signin);
  }


}
