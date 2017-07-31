import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProductList} from "../productlist/productlist";
import {ProductDetails} from "../productdetails/productdetails";
import {HomeService} from "./shared/home.service";
import {AppConstant} from "../../app/shared/app.constant";
import {AppShared} from "../../app/shared/app.shared";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public categorys: Array<any> = [];
  public productLists: Array<any> = [];
  private options: any;
  public currency: string = AppConstant.APP_CURRENCY;


  constructor(public navCtrl: NavController, public homeService: HomeService, public appShared: AppShared) {

    this.appShared.showLoading();
    this.homeService.getCategories().subscribe(data => this.onStateSuccess(data), error => this.onStateError(error));
    this.homeService.getProductList(this.options).subscribe(data => this.onProductSuccess(data), error => this.onProductError(error));

  }


  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/banner001.jpg",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/banner002.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/banner001.jpg",
    }
  ];


  showProductList(categoryObj: any) {
    this.navCtrl.push(ProductList, {'categoryObj': categoryObj});
  }

  showProductDetail(productDetails: any) {
    this.navCtrl.push(ProductDetails, {'productDetails': productDetails});
  }


  private onStateSuccess(data: any) {

    for (let cat = 0; cat < data.product_categories.length; cat++) {
      let dataList = data.product_categories[cat];
      console.log(data.product_categories[cat]);
      this.categorys.push({'id': dataList.id, 'title': dataList.name, 'image': "assets/img/card-04.png"});
    }

  }

  private onStateError(error: any) {
    console.log(error);
  }

  private onProductSuccess(data: any) {
    console.log(data.products);
    this.appShared.hideLoading();

    this.productLists = data.products;

  }

  private onProductError(error: any) {
    console.log(error);
    this.appShared.hideLoading();
  }


}
