import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { NewArrivalsPage } from '../pages/new-arrivals/new-arrivals';
import { ProfilePage } from '../pages/profile/profile';
import { CategorizesPage } from '../pages/categorizes/categorizes';
import { CartPage } from '../pages/cart/cart';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { COrdersPage } from '../pages/c-orders/c-orders';
import { CardsPage } from '../pages/cards/cards';
import { PaymentPage } from '../pages/payment/payment';

import { DTabsPage } from '../pages/d-tabs/d-tabs';
import { BoutiqueInfoPage } from '../pages/boutique-info/boutique-info';
import { CollectionPage } from '../pages/collection/collection';;
import { DOrdersPage } from '../pages/d-orders/d-orders';
import { NewItemPage } from '../pages/new-item/new-item';

import { IonicStorageModule } from '@ionic/storage' 
import { Storage } from '@ionic/storage';
import { Auth } from '../providers/auth';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';






@NgModule({
  declarations: [
    MyApp,
    NewArrivalsPage,
    ProfilePage,
    CategorizesPage,
    CartPage,
    TabsPage,
    HomePage,
    LoginPage,
    SignUpPage,
    COrdersPage,
    CardsPage,
    PaymentPage,

    DTabsPage,
    BoutiqueInfoPage,
    CollectionPage,
    DOrdersPage,
    NewItemPage,
  ],


  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule

  ],


  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewArrivalsPage,
    ProfilePage,
    CategorizesPage,
    CartPage,
    TabsPage,
    HomePage,
    LoginPage,
    SignUpPage,
    COrdersPage,
    CardsPage,
    PaymentPage,

    DTabsPage,
    BoutiqueInfoPage,
    CollectionPage,
    DOrdersPage,
    NewItemPage,


  ],


  providers: [
    Auth,
    HttpModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
