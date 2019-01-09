import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;

  loading: Loading;
  // registerCredentials = { email: '', password: ''};

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  constructor(private afAuth: AngularFireAuth,

    private nav: NavController, public navParams: NavParams, private auth: AuthServiceProvider, private loadingCtrl: LoadingController) { }



  // public login() {
  //   this.showLoading()
  //   this.auth.login(this.registerCredentials).subscribe(allowed => {
  //     if (allowed) {
  //       this.nav.setRoot('HomePage');
  //     } else {
  //       this.showError("Access Denied");
  //     }
  //   },
  //     error => {
  //       this.showError(error);
  //     });
  //
  //     console.log("Email Address: "+this.registerCredentials.email);
  //     console.log("Password: "+this.registerCredentials.password);
  //
  // }
   async login(user: User){
     try{
       const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
       // console.log(result);
       if(result){
        this.nav.setRoot('AccountProfilePage');
      }
     }
     catch (e){
       console.error(e);
     }
   }
   register() {
     this.nav.push('RegisterPage');
   }


  // showLoading() {
  //   this.loading = this.loadingCtrl.create({
  //     content: 'Please wait...',
  //     dismissOnPageChange: true
  //   });
  //   this.loading.present();
  // }

  showError(text) {
    this.loading.dismiss();

    // let alert = this.alertCtrl.create({
    //   title: 'Fail',
    //   subTitle: text,
    //   buttons: ['OK']
    // });
    // alert.present(prompt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
