import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController, Slides } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {LoginPage} from '../login/login';
import {Http, Headers} from '@angular/http';
import {PostRequestPage} from '../post-request/post-request';
/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
@ViewChild(Slides) setslide:Slides;
   data:any
show:any
id:any
passon:any
children:any
pass:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public loading:LoadingController, public menu:MenuController) {

}

 
  

  ionViewWillEnter()
{
  this.getCategory();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

getCategory()
  {
    var arr = new Array();
    this.http.get('http://localhost/signup-API/new1.php?rquest=showCategory').map(res => res.json()).subscribe(res =>{
      this.data = res.msg;
      this.passon = this.data;

      for(let i of this.data)
      {
        if(i.parent == null)
        {
          arr.push(i);
        }
      }
      function compare(a,b)
      {
        if(a.sequence < b.sequence)
        {
          return -1;
        }
        if(a.sequence > b.sequence)
        {
          return 1;
        }
        return 0;
      }
      arr.sort(compare);
      this.show = arr;
    },
    (err)=>{
      alert("failed");
    }
    )
  }

  selectSubcategory(parents)
  {
    var child = new Array();
    for(var i of this.passon)
    {
      if(parents == i.parent)
      {
        child.push(i);
      }
    }
    this.children = child;
    this.setslide.slideNext();
  }

  showing(passid)
  {
    alert(passid);
    this.navCtrl.push(PostRequestPage, {
      passing:passid,
    });
  }
}
 
  


