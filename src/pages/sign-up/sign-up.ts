import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'; //Customer Home Page
import { BoutiqueInfoPage } from '../boutique-info/boutique-info'; //Designer app
import { Auth } from '../../providers/auth';



@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
    role: string;
    email: string;
    password: string;
    loading: any;

 
   constructor(public navCtrl: NavController,
    public authService: Auth, 
    public loadingCtrl: LoadingController) {
   }

register(){
 
    this.showLoader();
 
    let details = {
        email: this.email,
        password: this.password,
        role: this.role
    };
 
    this.authService.createAccount(details).then((result) => {
      this.loading.dismiss();
      console.log(result);
      this.navCtrl.setRoot(TabsPage);
    }, (err) => {
        this.loading.dismiss();
    });
 
  }
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }

}
