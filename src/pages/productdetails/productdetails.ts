import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AppConstant} from "../../app/shared/app.constant";


@Component({
  selector: 'page-productdetails',
  templateUrl: 'productdetails.html',
})
export class ProductDetails {
  public productDetails: any;
  public currency: string = AppConstant.APP_CURRENCY;
  public slides :any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productDetails = this.navParams.get('productDetails');
    console.log(this.productDetails);


    for (let cat = 0; cat < this.productDetails.images.length; cat++) {
      let dataList = this.productDetails.images[cat];
      console.log(this.productDetails.images[cat]);
      this.slides.push({'id': dataList.id, 'title': dataList.title, 'image': dataList.src});
    }


  }


  buyToCart() {

  }

  addToCart() {

  }

}
