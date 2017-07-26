import { Component } from '@angular/core';
import { NavController,MenuController,MenuToggle } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {LoginPage} from '../login/login';
import {ProfileInfoPage} from '../profile-info/profile-info';
import {ForgotPage} from '../forgot/forgot';
import {ForgotpassPage} from '../forgotpass/forgotpass';
import {PostRequestPage} from '../post-request/post-request';
import {CategoryPage} from '../category/category';
import {DeletePage} from '../delete/delete';
import {ShowRequestPage} from '../show-request/show-request';
import {RequirementDetailsPage} from '../requirement-details/requirement-details';
import {WelcomePage} from '../welcome/welcome';
import {Storage} from '@ionic/storage';
import {DashboardPage} from '../dashboard/dashboard';
import {OtpPage} from '../otp/otp';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage: Storage, public menu:MenuController) {
    menu.enable(true, 'menu1');
  }

  /* ionViewWillEnter()
  {
   this.load();
  }*/

    navigate(){
      this.navCtrl.push(SignupPage);
    }
    
  login(){
    this.navCtrl.push(LoginPage);
  }

  pageinfo()
  {
    this.navCtrl.push(ProfileInfoPage);
  }

  forgot()
  {
    this.navCtrl.push(ForgotPage);
  }

  category()
  {
    this.navCtrl.push(CategoryPage);
  }

  showReq()
  {
    this.navCtrl.push(ShowRequestPage);
  }

  welcome()
  {
    this.navCtrl.push(WelcomePage);
  }

  profile()
  {
    this.navCtrl.push(ProfileInfoPage);
  }

  load()
  {
    this.storage.get('id').then((val)=>{
      if(!val)
      {
        this.navCtrl.push(LoginPage);
      }
    });
  }

  Dashboard()
  {
    this.navCtrl.push(DashboardPage);
  }

  otp()
  {
    this.navCtrl.push(OtpPage);
  }

  
}
