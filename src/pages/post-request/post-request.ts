import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, LoadingController, AlertController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Http, Headers} from '@angular/http';
import {Storage} from '@ionic/storage';
import {greater} from '../../validators/greaterthen';
import {DashboardPage} from '../dashboard/dashboard';
import {RequirementDetailsPage} from '../requirement-details/requirement-details'
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
  @ViewChild(Slides) setslide:Slides;
id:any = this.navParams.get('passing');
public consid:any;
request:FormGroup;
request1:FormGroup;
request2:FormGroup;
range:any;
post:any;
location:any;
cityId:any;
unit:any = "Units";
hasRanged:boolean = false;
structure:any = {lower:'', upper:''};

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
      public formBuilder: FormBuilder,
       public http:Http,
        public storage:Storage,
         public loading:LoadingController,
         public alerts:AlertController,
        ) {
    this.request = formBuilder.group({
      Title:['', Validators.required],
      Description:['', Validators.required],
      modelnum:'',
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
      companyName:'',
       Quantity:['', Validators.compose([Validators.required, this.quantityCheck])],
      color:'',
    });
  
    //this.request1.controls.structure.setValue({lower: Number(this.request1.get('minRange').value), upper:Number(this.request1.get('maxRange').value)}); 
     let loadingPopup = this.loading.create({
      content: 'Loading Posts....'
    });

    loadingPopup.present();
    this.http.get('http://10.0.2.2/signup-API/new1.php?rquest=selectCity').map(res => res.json()).subscribe(res => {
      this.post = res.msg;
      loadingPopup.dismiss();
    });
  }


  greaterThen(group:FormGroup)
  {
    var minrange = parseInt(group.controls['minRange'].value, 10);
    var maxRange = parseInt(group.controls['maxRange'].value, 10);
  if(minrange >=0 && maxRange >=0)
  {
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
  else if(minrange < 0)
  {
    group.controls['minRange'].setErrors({"minrange is negative":true});
  }
  else if(maxRange < 0)
  {
    group.controls['maxRange'].setErrors({"maxrange is negative":true});
  }
  else if(minrange < 0 && maxRange < 0)
  {
    group.controls['maxRange'].setErrors({"maxrange is negative":true});
    group.controls['minRange'].setErrors({"minrange is negative":true});
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
      this.setslide.lockSwipes(true);
  }


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
    //alert(this.unit);
    //alert(this.consid);
    if(this.hasRanged)
      {
        this.request1.controls['minRange'].setValue(this.structure.lower);
        //alert(typeof(this.request1.controls['minRange'].value));
        this.request1.controls['maxRange'].setValue(this.structure.upper);
      }
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
      cityid:this.cityId,
      unit: this.unit,
      companyName:this.request2.get('companyName').value,
    });

    //alert(data);

    this.http.post('http://10.0.2.2/signup-API/new1.php?rquest=postRequest', data, headers).map(res=>res.json()).subscribe(res=>{
      if(res.status == 'Success')
      {
        //getting today's date
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        var todays = mm + '/' + dd + '/' + yyyy;
        //ends here
        data = JSON.parse(data);
        data["priceRange"] = this.request1.get('minRange').value + ',' + this.request1.get('maxRange').value;
        data["Title"] = this.request.get('Title').value;
        data["colorPreference"] = this.request2.get('color').value;
        data["modelNo"] = this.request.get('modelnum').value;

        var postData = {
          normalReq:data,
          date:todays
        }
        console.log("post data");
        console.log(postData);
        this.navCtrl.push(RequirementDetailsPage, {
          reqDet:postData,
          pageType:"postRequest"
        }); 
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
    this.setslide.lockSwipes(false);
    this.setslide.slideNext();
    this.setslide.lockSwipes(true);

  }
  prev()
  {
    this.setslide.lockSwipes(false);
    this.setslide.slidePrev();
    this.setslide.lockSwipes(true);
  }

  show()
  {
    var min = this.request1.controls['minRange'].value;
    //alert(min);
  }

  initializedItems()
  {
    this.location = this.post;
  }

  getLocation(ev: any)
  {
    this.initializedItems();
    let val = ev.target.value;
    if (val && val.trim() != ''){
      console.log(this.location);
    this.location = this.location.filter((loc) => {
      return(loc.location.toLowerCase().indexOf(val.toLowerCase()) > -1);
      
    })
  }
  else if(!val)
  {
    this.location = null;
  }
}

getCity(id)
{
   this.cityId = id;
   this.next();
}

onDataChange()
{
  this.hasRanged = true;
  console.log(this.structure.lower);
  //this.request1.controls['minRange'].setValue(this.structure.lower);
  //this.request1.controls['maxRange'].setValue(this.structure.upper);
  console.log(this.structure.upper);

}

}



