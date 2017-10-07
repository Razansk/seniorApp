import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KessaDetailsPage } from '../kessa-details/kessa-details';

@Component({
  selector: 'page-new-arrivals',
  templateUrl: 'new-arrivals.html'
})
export class NewArrivalsPage {

  constructor(public navCtrl: NavController) {

  }

  getProductDetails(){
    this.navCtrl.setRoot(KessaDetailsPage);
  }

  addToCart(){

  }

}
