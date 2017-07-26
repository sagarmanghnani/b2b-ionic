import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Http, Headers} from '@angular/http';
import {Storage} from '@ionic/storage';
import {RequirementDetailsPage} from '../requirement-details/requirement-details'
/**
 * Generated class for the ShowRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-show-request',
  templateUrl: 'show-request.html',
})
export class ShowRequestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public storage:Storage,public menu:MenuController) {
    menu.enable(true);
  }

consid:any;
request:any;
dateTime:any;
singleArray:any;
  ionViewWillEnter()
  {
   this.load();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowRequestPage');
    
  }

  load()
    {
     this.storage.get('id').then((val)=>{
      this.consid = val;
    });
  }
  
  showRequest()
  {
    var arr = new Array();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let data = JSON.stringify({
      id:this.consid,
    })
    this.http.post('http://localhost/signup-API/new1.php?rquest=showRequest', data,headers).map(res => res.json()).subscribe(res =>{
      var array = Array();
      this.request = res.msg;
      for(var i = 0; i<this.request.length;i++)
      {
        array.push({
          normalReq:this.request[i],
          date: new Date(this.request.modifiedDate).toLocaleString
        });
      }
      this.singleArray = array;
      alert(this.request.length);

      console.log(this.singleArray);
    });
    
  }

  requirementDetail(requirement)
  {
    console.log(requirement);
    this.navCtrl.push(RequirementDetailsPage, {
      reqDet:requirement,
      consumerId: this.consid,
    });
  }

}
