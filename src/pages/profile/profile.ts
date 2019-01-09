import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, ToastController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
// import { Account } from '../../models/account';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  // profile = {} as Profile;

  constructor(private afAuth: AngularFireAuth,  private toast: ToastController,
    public navCtrl: NavController, private loadingCtrl: LoadingController) {

  }


   LoginPage(){
     this.navCtrl.setRoot(LoginPage);
   }
  //
  // createProfile(){
  //   this.afAuth.authState.take(1).subscribe(auth => {
  //     this.afDatabase.list('profile/${auth.uid}').push(this.profile)
  //       .then(() => this.navCtrl.push('AccountPage'));
  //   })
  // }

  logOut() {
    // this.User.logOut().then((resp) => {
    // this.showLoading()
      console.log('Logged out successfully');

      this.navCtrl.setRoot(LoginPage);
    // }, err => {
    //   console.log('Error logging out', err);
    //
    //   this.toastCtrl.create({
    //     message: 'Error logging out',
    //     duration: 2000
    //   }).present();
    // })
  }

  // showLoading() {
  //   this.Loading = this.loadingCtrl.create({
  //     content: 'Logging Out...',
  //     dismissOnPageChange: true
  //   });
  //   this.loading.present();
  // }
}
