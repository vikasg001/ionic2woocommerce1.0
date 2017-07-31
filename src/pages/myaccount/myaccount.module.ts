import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Myaccount } from './myaccount';

@NgModule({
  declarations: [
    Myaccount,
  ],
  imports: [
    IonicPageModule.forChild(Myaccount),
  ],
  exports: [
    Myaccount
  ]
})
export class MyaccountModule {}
