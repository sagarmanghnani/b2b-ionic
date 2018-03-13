import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SignupPage} from '../pages/signup/signup'
import { IonicStorageModule } from '@ionic/storage';
import {LoginPage} from '../pages/login/login'
import { HttpModule } from '@angular/http';
import {OtpPage} from '../pages/otp/otp';
import {ProfileInfoPage} from '../pages/profile-info/profile-info';
import {AppVersion} from '@ionic-native/app-version';
import {Camera} from '@ionic-native/camera';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import {ActionSheet, ActionSheetOptions} from '@ionic-native/action-sheet';
import {ForgotPage} from '../pages/forgot/forgot';
import {ForgotpassPage} from '../pages/forgotpass/forgotpass';
import {PostRequestPage} from '../pages/post-request/post-request';
import {CategoryPage} from '../pages/category/category';
import {DeletePage} from '../pages/delete/delete';
import {ShowRequestPage} from '../pages/show-request/show-request';
import {RequirementDetailsPage} from '../pages/requirement-details/requirement-details';
import {WelcomePage} from '../pages/welcome/welcome';
import {DashboardPage} from '../pages/dashboard/dashboard';
import { SMS } from '@ionic-native/sms';
import {ViewBidsPage} from '../pages/view-bids/view-bids';
import {SelectBidPage} from '../pages/select-bid/select-bid';
import {SplashscreenPage} from '../pages/splashscreen/splashscreen';
import {ProductlistPage} from '../pages/productlist/productlist';
import {TabspagePage} from '../pages/tabspage/tabspage';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    OtpPage,
    ProfileInfoPage,
    ForgotPage,
    ForgotpassPage,  
    PostRequestPage,
    CategoryPage,
    DeletePage,
    ShowRequestPage,
    RequirementDetailsPage,
    WelcomePage,
    DashboardPage,
    ViewBidsPage,
    SelectBidPage,
    SplashscreenPage,
    ProductlistPage,
    TabspagePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    OtpPage,
    ProfileInfoPage,
    ForgotPage,
    ForgotpassPage,
    PostRequestPage,
    CategoryPage,
    DeletePage,
    ShowRequestPage,
    RequirementDetailsPage,
    WelcomePage,
    DashboardPage,
    ViewBidsPage,
    SelectBidPage,
    SplashscreenPage,
    ProductlistPage,
    TabspagePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    AppVersion,
    Camera,
    Transfer,
    FileChooser,
    SMS,    
    CategoryPage
  ]
})
export class AppModule {}
