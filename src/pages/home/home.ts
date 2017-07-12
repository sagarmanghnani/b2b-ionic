import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {LoginPage} from '../login/login';
import {ProfileInfoPage} from '../profile-info/profile-info';
import {ForgotPage} from '../forgot/forgot';
import {ForgotpassPage} from '../forgotpass/forgotpass';
import {PostrequestPage} from '../postrequest/postrequest';
import {PostRequestPage} from '../post-request/post-request';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
    navigate(){
      this.navCtrl.push(SignupPage);
    }
    
  login(){
    this.navCtrl.push(LoginPage);
  }

  nav()
  {
    this.navCtrl.push(SignupPage);
  }

  pageinfo()
  {
    this.navCtrl.push(ProfileInfoPage);
  }

  forgot()
  {
    this.navCtrl.push(ForgotPage);
  }

  Forgotpass()
  {
    this.navCtrl.push(ForgotpassPage);
  }

  Postrequest()
  {
    this.navCtrl.push(PostrequestPage); 
  }

  post()
  {
    this.navCtrl.push(PostRequestPage);
  }
}
