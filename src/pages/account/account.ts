import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Account } from '../../models/account';


@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  account = {} as Account;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  LoginPage(){
    this.navCtrl.setRoot('LoginPage');
  }

  createAccount(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`account/${auth.uid}`).set(this.account)
        .then(() => this.navCtrl.setRoot('AccountProfilePage'));
    })
  }

//   logout() {
//     this.isLoggedIn = false;
//     this.firebaseAuth
//         .auth
//         .signOut().then(() => {
//             this.appCtrl.getRootNav().popToRoot(); //root is login page
//         });
// }
  // ionViewWillLoad() {
  //   // console.log('ionViewDidLoad AccountPage');
  //   // this.afAuth.authState.subscribe(data => console.log(data));
  //   this.afAuth.authState.subscribe(data => {
  //     if (data.email && data.uid){
  //     this.toast.create({
  //       message: 'Welcome to MARSSERVICES, ${data.email}',
  //       duration: 3000
  //     }).present();
  //   }
  //   else {
  //     this.toast.create({
  //       message: 'Could not find authentication details!',
  //       duration: 3000
  //     }).present();
  //
  //   }
  //   });
  // }

}
