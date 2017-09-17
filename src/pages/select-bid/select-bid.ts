import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http,Headers} from '@angular/http';

/**
 * Generated class for the SelectBidPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-select-bid',
  templateUrl: 'select-bid.html',
})
export class SelectBidPage {

  bidDetails:any = this.navParams.get('collectbid');
  status:number;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public http:Http

    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectBidPage');
  }

  ionViewWillEnter()
  {
    console.log(this.bidDetails);
    this.isApproved();
  }

  Approve()
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let data = JSON.stringify({
      supplierId: this.bidDetails.supplierId,
      requestId: this.bidDetails.requestId
    });
    this.http.post('http://localhost/signup-API/new1.php?rquest=approveBids', data, headers).map(res=>res.json()).subscribe(res=>{
      if(res.status == 'Success')
        {
          alert(res.msg);
          this.status = 1;
        }
      else
        {
          alert(res.msg);
        }
    },
  (err)=>{
    alert("Connection Failed");
  });
  }

  Reject()
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let data = JSON.stringify({
      supplierId: this.bidDetails.supplierId,
      requestId: this.bidDetails.requestId
    });
    this.http.post('http://localhost/signup-API/new1.php?rquest=rejectBid', data, headers).map(res=>res.json()).subscribe(res=>{
      if(res.status == 'Success')
      {
        alert(res.msg);
        this.status = -1;
      }
      else
        {
          alert(res.msg);
        }
    },
    (err)=>{
      alert("Connection Failed");
    });
  }

  decideLater()
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let data = JSON.stringify({
      supplierId: this.bidDetails.supplierId,
      requestId: this.bidDetails.requestId
    });

    this.http.post('http://localhost/signup-API/new1.php?rquest=decideLater', data, headers).map(res=>res.json()).subscribe(res=>{
      if(res.status == 'Success')
        {
          alert(res.msg);
          this.status = 0;
        }
      else
        {
          alert(res.msg);
        }
      },
      (err)=>{
        alert("Connection Failed");
      });
  }

  isApproved()
  {
    if(this.bidDetails.status == 1)
      {
        //bid Approved
        this.status = 1;
      }
    else if(this.bidDetails.status == -1)
      {
        //rejected
        this.status = -1;
      }
      else
        {
          //Bid status not decided
          this.status = 0;
        }
  }

}
