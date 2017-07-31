import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ProductDetails} from "../productdetails/productdetails";
import {HomeService} from "../home/shared/home.service";
import {AppConstant} from "../../app/shared/app.constant";
import {AppShared} from "../../app/shared/app.shared";

@Component({
  selector: 'page-productlist',
  templateUrl: 'productlist.html',
})
export class ProductList {

  public listView: string = 'List';
  public categoryData: any;
  public productLists: Array<any> = [];

  public currency: string = AppConstant.APP_CURRENCY;
  public searchTerm: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public homeService: HomeService,public appShared:AppShared) {

    this.categoryData = this.navParams.get('categoryObj');
    this.searchTerm = this.categoryData.title;
    console.log(this.searchTerm, this.categoryData);
    this.appShared.showLoading();
    this.homeService.getProductList().subscribe(data => this.onProductSuccess(data), error => this.onProductError(error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductList');
  }


  private onProductSuccess(data: any) {
    console.log(data.products);
    this.appShared.hideLoading();
    this.productLists = data.products;

  }

  private onProductError(error: any) {
    this.appShared.hideLoading();
  }

  viewChange(view: string) {
    this.listView = (view == 'List' ? 'List' : 'Grid');
  }

  showProductDetail(product: any) {
    console.log(product);
    this.navCtrl.push(ProductDetails, {'productDetails': product});
  }


}
