import { Component, ViewChild } from '@angular/core';
import { NavController,MenuController,MenuToggle,Tabs, App, Slides } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {LoginPage} from '../login/login';
import {ProfileInfoPage} from '../profile-info/profile-info';
import {ForgotPage} from '../forgot/forgot';
import {ForgotpassPage} from '../forgotpass/forgotpass';
import {PostRequestPage} from '../post-request/post-request';
import {CategoryPage} from '../category/category';
import {ShowRequestPage} from '../show-request/show-request';
import {RequirementDetailsPage} from '../requirement-details/requirement-details';
import {Storage} from '@ionic/storage';
import {DashboardPage} from '../dashboard/dashboard';
import {OtpPage} from '../otp/otp';
import {Http, Headers} from '@angular/http';
import {ProductlistPage} from '../productlist/productlist';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CategoryPage]
})
export class HomePage {
  data:any;
  @ViewChild(Slides) slides:Slides;
  constructor(public navCtrl: NavController,
    public storage: Storage,
    public menu:MenuController,
    public http:Http,
    public app:App,
    public category:CategoryPage
  ) {
    menu.enable(true, 'menu1');
    this.category.getCategory();
  }

  ionViewWillEnter()
  {
    this.productCorousel();
  }

  productCorousel()
  {
    this.http.get('http://10.0.2.2/signup-API/new1.php?rquest=productDetails').map(res => res.json()).subscribe(res =>{
      this.data = res.msg;
      
    });
  }



  selectSubcategory(parents)
  {
    var child = new Array();
    for(var i of this.category.passon)
    {
      if(parents == i.parent)
      {
        child.push(i);
      }
    }
    this.category.children = child;
  }
  getcategoryid(id)
  {
    this.navCtrl.push(ProductlistPage, {
      categoryId:id
    });
  }

}