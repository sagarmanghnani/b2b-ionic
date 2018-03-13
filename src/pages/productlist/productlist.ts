import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
/**
 * Generated class for the ProductlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-productlist',
  templateUrl: 'productlist.html',
})
export class ProductlistPage {
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http:Http,
  ) {
  }
  data:any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductlistPage');
  }

  ionViewWillEnter()
  {
    this.productList();
  }

  
  productList()
  {
    alert(this.navParams.get('categoryId'));
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    let data = JSON.stringify({
      categoryid: this.navParams.get('categoryId'),
});
    this.http.post('http://localhost/signup-API/new1.php?rquest=categoryProduct', data, headers).map(res=>res.json()).subscribe(res=>{
      this.data = res.msg;
      console.log(this.data);
    })
  }

}
