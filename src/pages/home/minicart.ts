import {Component} from "@angular/core";
import {Cart} from "../cart/cart";
import {NavController} from "ionic-angular";
@Component({
  selector: 'page-minicart',
  template: `
    <button ion-button icon-only (click)="openCart()" item-right>
      <ion-icon name="cart"></ion-icon>
      <ion-badge item-end color="light">2</ion-badge>
    </button>
  `
})


export class MiniCart {

  constructor(public navCtrl: NavController) {

  }

  openCart() {
    this.navCtrl.setRoot(Cart);
  }

}
