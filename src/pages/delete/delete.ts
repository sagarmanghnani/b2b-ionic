import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the DeletePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html',
})
export class DeletePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  @ViewChild(Slides) setslide:Slides;

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeletePage');
  }

  next()
  {
    this.setslide.slideNext();
  }
  prev()
  {
    this.setslide.slidePrev();
  }

}
