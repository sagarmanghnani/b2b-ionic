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
data:boolean;
  ionViewWillEnter()
  {
   this.showRequest();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowRequestPage');
  }

  
  
  showRequest()
  {
   
    this.storage.get('id').then(val => {
      this.consid = val;
    var arr = new Array();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let data = JSON.stringify({
      id:this.consid
    });

    this.http.post('http://10.0.2.2/signup-API/new1.php?rquest=showRequest', data,headers).map(res => res.json()).subscribe(res =>{
      var array = Array();
      this.request = res.msg;
      var length = Object.keys(this.request).length;

      console.log(res.msg);
      if(length === 0)
      {
        this.data = false;
      }
      else{
        this.data = true;
      for(var i = 0; i<this.request.length;i++)
      {
        array.push({
          normalReq:this.request[i],
          date: new Date(this.request[i].modifiedDate).toLocaleDateString()
        });
      }
      this.singleArray = array;
      //alert(this.request.length);
      
      console.log(this.singleArray);
      
      }
    },
    //(err) => {alert("connection Failed");}
    );
    
  })
    
  }

  requirementDetail(requirement)
  {
    this.navCtrl.push(RequirementDetailsPage, {
      reqDet:requirement,
      consumerId: this.consid,
    });
  }

}
