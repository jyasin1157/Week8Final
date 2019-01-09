import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

// import { FirebaseAppConfig, FirebaseOptions, AngularFireModule } from '@angular/fire';


// import { FirebaseAuth } from '@angular/fire/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// import { firebaseConfig } from '../config';

// import { FIREBASE_CONFIG } from './app.firebase.config';

import { ServicesPage } from '../pages/services/services';
import { MyProjectsPage } from '../pages/my_projects/my_projects';
import { ContactPage } from '../pages/contact/contact';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
// import { RegisterPage } from '../pages/register/register';
// import { AccountPage } from '../pages/account/account';
import { CarpetCleaningPage } from '../pages/carpet-cleaning/carpet-cleaning';
import { HousekeepingPage } from '../pages/housekeeping/housekeeping';
import { PlumbingPage } from '../pages/plumbing/plumbing';
import { ElectricalPage } from '../pages/electrical/electrical';
import { HvacPage } from '../pages/hvac/hvac';
import { PestControlPage } from '../pages/pest-control/pest-control';
import { PaintingPage } from '../pages/painting/painting';
import { ResurfacingPage } from '../pages/resurfacing/resurfacing';
import { AirDryerDuctCleaningPage } from '../pages/air-dryer-duct-cleaning/air-dryer-duct-cleaning';
import { TileGroutPage } from '../pages/tile-grout/tile-grout';
import { TraumaSceneCleanUpPage } from '../pages/trauma-scene-clean-up/trauma-scene-clean-up';
import { WaterRestorationPage } from '../pages/water-restoration/water-restoration';
import { MaintenanceMakeReadyPage } from '../pages/maintenance-make-ready/maintenance-make-ready';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Camera } from '@ionic-native/camera';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAIT6DcC1BAOi1t2-FDjKQBsGq_lpU11EU",
    authDomain: "login-authentication-7d085.firebaseapp.com",
    databaseURL: "https://login-authentication-7d085.firebaseio.com",
    projectId: "login-authentication-7d085",
    storageBucket: "login-authentication-7d085.appspot.com",
    messagingSenderId: "843288759516"
  };

@NgModule({
 declarations: [
    MyApp,
    ServicesPage,
    MyProjectsPage,
    ContactPage,
    ProfilePage,
    TabsPage,
    CarpetCleaningPage,
    HousekeepingPage,
    PlumbingPage,
    ElectricalPage,
    HvacPage,
    PestControlPage,
    PaintingPage,
    ResurfacingPage,
    AirDryerDuctCleaningPage,
    TileGroutPage,
    TraumaSceneCleanUpPage,
    WaterRestorationPage,
    MaintenanceMakeReadyPage,
    LoginPage,
    // RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ServicesPage,
    MyProjectsPage,
    ContactPage,
    ProfilePage,
    TabsPage,
    CarpetCleaningPage,
    HousekeepingPage,
    PlumbingPage,
    ElectricalPage,
    HvacPage,
    PestControlPage,
    PaintingPage,
    ResurfacingPage,
    AirDryerDuctCleaningPage,
    TileGroutPage,
    TraumaSceneCleanUpPage,
    WaterRestorationPage,
    MaintenanceMakeReadyPage,
    LoginPage,
    // RegisterPage

  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    CallNumber,
    EmailComposer,
    // FirebaseAppConfig
    //FirebaseAuth
    // AuthServiceProvider
  ]
})
export class AppModule {}
