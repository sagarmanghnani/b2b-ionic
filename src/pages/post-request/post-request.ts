import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostrequestPage} from '../postrequest/postrequest';
import {ModalController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http, Headers} from '@angular/http';

/**
 * Generated class for the PostRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-post-request',
  templateUrl: 'post-request.html',
})
export class PostRequestPage {
id:any;
cildfor:any;
parentfor:any;
request:FormGroup
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalctrl: ModalController, public formBuilder: FormBuilder) {
    this.request = formBuilder.group({
      title:['', Validators.required],

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostRequestPage');
  }

    navCat()
    {
      let myModal = this.modalctrl.create(PostrequestPage);
      myModal.onDidDismiss((item)=>{
        alert(item);  
      })
      myModal.present();

    }
    show()
    {
      alert(this.id);
    }

}
