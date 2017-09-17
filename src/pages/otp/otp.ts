import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileInfoPage} from '../profile-info/profile-info';
import {ForgotpassPage} from '../forgotpass/forgotpass';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the OtpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})

export class OtpPage {
otp:FormGroup;
appNumber: any;
error:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public formBuilder: FormBuilder, public storage:Storage) {
    this.otp = formBuilder.group({
        otps: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
  }

phone:any = this.navParams.get('phone');
accountType:any = 'Consumer';
pageType:any = this.navParams.get('pageType');
email:any = this.navParams.get('email');
  sendOtp()
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
      // during forgot password page 
      //alert(this.email);
      //alert(this.pageType);
      if(this.pageType == 'forgot')
      {
        //alert("hello");
        let data = JSON.stringify({
          email:this.email,
          accountType:this.accountType,
          otp:this.otp.get('otps').value,
        });

        this.http.post('http://localhost/signup-API/new1.php?rquest=verifyOtp', data, headers).map(res=>res.json()).subscribe(res=>{
          if(res.status == 'Success')
          {
            //alert(res.msg + " verify");
            this.navCtrl.push(ForgotpassPage, {
              email:this.email
            });
          }
          else
          {
            this.error = res.msg;
          }
        }, 
        (err)=>{
          alert("failed verify");
        }
        );
      }

      // during Signup page
      else
      {
        let data = JSON.stringify({
          phone: this.phone,
          otp: this.otp.get('otps').value,
          accountType: this.accountType,
        });
        
        console.log("otp value is" + this.otp.get('otps').value);

        this.http.post('http://localhost/signup-API/new1.php?rquest=getOtp',data,headers).map(res => res.json()).subscribe(res => {
          if(res.status == 'Success')
          {
              this.storage.set('id', res.msg);
              this.navCtrl.push(ProfileInfoPage, {
              phones:this.phone,
              accountType: this.accountType,
            });
        }
        else{
          this.error = res.msg;
        }
        
        },
        (err)=>{
          alert("failed incredibly");
        }
        )
  }
  }
}






