import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the PostrequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-postrequest',
  templateUrl: 'postrequest.html',
})
export class PostrequestPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public viewCtrl:ViewController) {
  }
data:any
show:any
id:any
passon:any
children:any

ionViewWillEnter()
{
  this.getCategory();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PostrequestPage');
  }


  getCategory()
  {
    var arr = new Array();
    this.http.get('http://10.0.2.2/signup-API/new1.php?rquest=showCategory').map(res => res.json()).subscribe(res =>{
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
  }

  close()
  {
    this.viewCtrl.dismiss();
  }

  closeModal(id) {
    alert(id);
    this.viewCtrl.dismiss(id);
  }

}
