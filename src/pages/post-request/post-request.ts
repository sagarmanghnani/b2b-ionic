import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Http, Headers} from '@angular/http';
import {Storage} from '@ionic/storage';
import {greater} from '../../validators/greaterthen'

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
id:any = this.navParams.get('passing');
public consid:any;
request:FormGroup;
request1:FormGroup;
request2:FormGroup;
range:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http:Http, public storage:Storage) {
    this.request = formBuilder.group({
      Title:['', Validators.required],
      Description:['', Validators.required],
      modelnum:['', Validators.required],
    });

    this.request1 = formBuilder.group({
       minRange:['', Validators.required],
      maxRange:['',Validators.required ], 
    },
    {
      validator: this.greaterThen
     }
     );

    this.request2 = formBuilder.group({
       Quantity:['', Validators.compose([Validators.required, this.quantityCheck])],
      color:['', Validators.required],
    });
  }


  greaterThen(group:FormGroup)
  {
    var minrange = group.controls['minRange'].value;
    var maxRange = group.controls['maxRange'].value;

    if(minrange == maxRange)
    {
      group.controls['maxRange'].setErrors({"equalTo":true});
    }
    if(minrange > maxRange)
    {
      group.controls['maxRange'].setErrors({"greaterThen":true});
    }
    else{
      return null;
    }
  }

  quantityCheck(control: FormControl)
  {
    if(control.value <= 0)
    {
      return {"quantity cannot be less then or equal to 0":true};
    }
    else{
      return null;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostRequestPage');
  }

@ViewChild(Slides) setslide:Slides;
  ionViewWillEnter()
  {
   this.load();
  }

   

   load()
    {
     this.storage.get('id').then((val)=>{
      this.consid = val;
    })
    }
   sendRequest()
  {
    alert(this.consid);
     var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let data = JSON.stringify({
      title:this.request.get('Title').value,
      categoryid:this.id,
      description: this.request.get('Description').value,
      minRange:this.request1.get('minRange').value,
      maxRange:this.request1.get('maxRange').value,
      quantity: this.request2.get('Quantity').value,
      color:this.request2.get('color').value,
      modelnum:this.request.get('modelnum').value,
      productType:"New",
      consumerid:this.consid,
    });

    alert(data);

    this.http.post('http://localhost/signup-API/new1.php?rquest=postRequest', data, headers).map(res=>res.json()).subscribe(res=>{
      if(res.status == 'Success')
      {
        alert(res.msg);
      }
      else
      {
        this.range = res.msg;
      }
    },
   
    );
    

  }

   next()
  {
    this.setslide.slideNext();
  }
  prev()
  {
    this.setslide.slidePrev();
  }

  show()
  {
    var min = this.request1.controls['minRange'].value;
    alert(min);
  }
}



