import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,MenuToggle } from 'ionic-angular';
import {CategoryPage} from '../category/category';
import {ShowRequestPage} from '../show-request/show-request';
import {Storage} from '@ionic/storage';
import {LoginPage} from '../login/login';

/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage, public menu:MenuController) {
    menu.enable(true, 'menu1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  Category()
  {
    this.navCtrl.push(CategoryPage);
  }

  ShowRequest()
  {
    this.navCtrl.push(ShowRequestPage);
  }

  LogOut()
  {
    this.storage.remove('id');
    this.storage.get('id').then(val => {
      if(!val)
      {
        this.navCtrl.push(LoginPage);
      }
    });
  }
}
