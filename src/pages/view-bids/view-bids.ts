import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {SelectBidPage} from '../select-bid/select-bid';
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
bid:boolean;  
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
      
      function compare(a,b)
      {
        if(a.status > b.status)
          {
            //A negative value if the first argument passed is less than the second argument.
            return -1;
          }
        if(a.status < b.status)
          {
            //A positive value if the first argument is greater than the second argument.
            return 1;
          }
        else
          {
            //Zero if the two arguments are equivalent.
            return 0;
          }
      }
      if(res.status == "Success")
        {
          res.msg.sort(compare);
          console.log(res.msg);
          this.supplierBids = res.msg;
          var length = Object.keys(this.supplierBids).length;
          if(length === 0)
          {
            this.bid = false;
          }
          else
          {
            this.bid = true;
          }
        }
  });
  }

  
  selectBid(collectbid)
  {
    this.navCtrl.push(SelectBidPage, {collectbid:collectbid});
  }
 

}
