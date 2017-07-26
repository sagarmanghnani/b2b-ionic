import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  var separate = this.requirement.priceRange;
  var sep = separate.split(",");
  this.minrange = sep[0];
  this.maxrange = sep[1];
}
}
