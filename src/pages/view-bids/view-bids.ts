import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
/**
 * Generated class for the ViewBidsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-view-bids',
  templateUrl: 'view-bids.html',
})
export class ViewBidsPage {

  requestId: any = this.navParams.get('requestId');
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  }
  
supplierBids:any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewBidsPage');
  }

  ionViewWillEnter()
{
  this.getBids();
}

  getBids()
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let data = JSON.stringify({
      requestId: this.requestId
    });

    this.http.post('http://localhost/signup-API/new1.php?rquest=viewBid', data,headers).map(res => res.json()).subscribe(res =>{
      if(res.status == "Success")
      {
        this.supplierBids = res.msg;
      }
  });
  }

}
