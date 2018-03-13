import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {DashboardPage} from '../dashboard/dashboard';
import {LoginPage} from '../login/login';
import {ProductlistPage} from '../productlist/productlist';
import {HomePage} from '../home/home';
import {TabspagePage} from '../tabspage/tabspage';
/**
 * Generated class for the SplashscreenPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-splashscreen',
  templateUrl: 'splashscreen.html',
})
export class SplashscreenPage {

  loginId: number;
  checkId: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashscreenPage');
  }

  ionViewWillEnter()
  {
   this.check();
  }

  check()
  {
      this.storage.get('id').then((val)=>{
        this.loginId = val;
        if(this.loginId)
          {
            this.checkId = true;
            this.navCtrl.push(TabspagePage);
          }
        else
          {
            this.checkId = false;
            this.navCtrl.push(LoginPage);
          }
      });
  }

}
