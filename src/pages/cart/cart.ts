import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AppStorage} from "../../app/shared/app.storage";
import {Login} from "../login/login";

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class Cart {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cart');
  }

  productsList = [
    {
      title: "Food",
      image: "assets/img/card-01.png",
    },
    {
      title: "Gerocery",
      image: "assets/img/card-02.png",
    },
    {
      title: "Mans",
      image: "assets/img/card-04.png",
    }, {
      title: "Womens",
      image: "assets/img/card-03.png",
    }, {
      title: "Cloth",
      image: "assets/img/card-02.png",
    }, {
      title: "Electronics",
      image: "assets/img/card-01.png",
    }
  ];


  showCheckout() {
    if(AppStorage.getItem('isLogin')==true){

    }else {
      this.navCtrl.setRoot(Login);
    }
  }


}
