import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Tabs } from 'ionic-angular';
import {PostRequestPage} from '../post-request/post-request';
import {HomePage} from '../home/home';
import {ShowRequestPage} from '../show-request/show-request';
/**
 * Generated class for the TabspagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabspage',
  templateUrl: 'tabspage.html',
})
export class TabspagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  home = HomePage;
  postRequest = PostRequestPage;
  showRequest = ShowRequestPage;
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabspagePage');
  }

}
