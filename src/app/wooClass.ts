/**
 * Created by vgupta on 6/9/2017.
 */

import * as WooCommerceAPI from 'woocommerce-api';
import {Injectable} from "@angular/core";

@Injectable()
export class WooClass {

  getWooConfig() {
    return new WooCommerceAPI({
      url: '', // Your store url (required)
      // version: 'v3', // WooCommerce API version (optional)
      // verifySsl: true, // Use `false` when need test with self-signed certificates, default is `true` (optional)
      // encoding: 'utf8', // Encode, default is 'utf8' (optional)
      consumerKey: 'ck_9bd65687522b136bf08a7c38156e6d87b4af9046', // Your API consumer key (required)
      consumerSecret: 'cs_98b876da0c71d89e2b5887f83291e60972919e53' // Your API consumer secret (required)
    });
  }

}
