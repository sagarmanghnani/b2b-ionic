import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewBidsPage} from '../view-bids/view-bids';
import {Http,Headers} from '@angular/http';
import {ShowRequestPage} from '../show-request/show-request';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the RequirementDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-requirement-details',
  templateUrl: 'requirement-details.html',
})
export class RequirementDetailsPage {

  constructor(public navCtrl: NavController
  , public navParams: NavParams,
    public http:Http,
    public alerts:AlertController,
  ) {
  }

  ionViewWillEnter()
  {
    this.show();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RequirementDetailsPage');
  }
requirement:any = this.navParams.get('reqDet');
consid:any = this.navParams.get('consumerId');
minrange:any;
maxrange:any;

show()
{
  var separate = this.requirement.normalReq.priceRange;
  var sep = separate.split(",");
  this.minrange = sep[0];
  this.maxrange = sep[1];
}

passBid()
{
  //alert(this.requirement.normalReq.id);
  this.navCtrl.push(ViewBidsPage, {
    requestId: this.requirement.normalReq.id
  });
}

deleteRequest()
{
  //alert(this.requirement.normalReq.id);
  let data = JSON.stringify({
    requestId: this.requirement.normalReq.id
  });
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');

  let alertss = this.alerts.create({
    title: 'Delete ' + this.requirement.normalReq.Title,
    message: 'Do you really want to delete your request ' + this.requirement.normalReq.Title,
    buttons: [
      {
        text: 'cancel',
        role: 'cancel'
      },
      {
        text:'Delete',
        handler: () => {
           this.http.post('http://10.0.2.2/signup-API/new1.php?rquest=deleteRequest', data, headers).map(res=>res.json()).subscribe(res=>{
            if(res.status == 'Success')
              {
                this.navCtrl.push(ShowRequestPage);
              }
              else
              {
                alert("Request could not be deleted");
              }
            });
        }
      }
    ]
  });
  alertss.present();
}

}
