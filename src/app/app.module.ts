import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Login} from "../pages/login/login";
import {ProductList} from "../pages/productlist/productlist";
import {Cart} from "../pages/cart/cart";
import {ProductDetails} from "../pages/productdetails/productdetails";
import {MiniCart} from "../pages/home/minicart";
import {WooClass} from "./wooClass";
import {HomeService} from "../pages/home/shared/home.service";
import {AppStorage} from "./shared/app.storage";
import {AppLogger} from "./shared/app.log";
import {AppShared} from "./shared/app.shared";
import {RatingComponent} from "../pages/home/starRating";
import {ProductByCate} from "./shared/pipe/productByCate.pipe";
import {NsCustomLoadingModule} from "./shared/NsCustomLoader/NsCustomLoadingModule";
import {Signin} from "../pages/signin/signin";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Login,
    ProductList,
    ProductDetails,
    Cart,
    MiniCart,
    RatingComponent,
    ProductByCate,
    Signin
  ],
  imports: [
    BrowserModule,
    NsCustomLoadingModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Login,
    ProductList,
    ProductDetails,
    Cart,
    MiniCart,
    RatingComponent,
    Signin
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WooClass,
    HomeService,
    AppShared,
    AppLogger,
    AppStorage
  ]
})
export class AppModule {
}
