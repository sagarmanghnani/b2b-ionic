import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http, Headers} from '@angular/http';
import {OtpPage} from '../otp/otp';
import { SMS } from '@ionic-native/sms';
/**
 * Generated class for the ForgotPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
forgot: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http:Http, public sms:SMS) {
    this.forgot = formBuilder.group({
      email:['',Validators.compose([Validators.required, Validators.email])],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }

 forgotPass()
 {
     var headers = new Headers();
     headers.append('Content-Type', 'application/json');
     
     let data = JSON.stringify({
       email:this.forgot.get('email').value,
       accountType:"Consumer",
     })

     this.http.post('http://10.0.2.2/signup-API/new1.php?rquest=forgotPass', data, headers).map(res=>res.json()).subscribe(res=>{
       if(res.status == 'Success')
       {
         //alert(res.msg);
       this.navCtrl.push(OtpPage, {
         pageType: 'forgot',
         email:this.forgot.get('email').value, 
       }
       
       );
     }
     else
     {
       alert(res.status);
     }
     },
     (err)=>{
       alert("failed");
     }
     )
 }

}
