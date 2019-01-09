import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Account } from '../../models/account';
/**
 * Generated class for the AccountProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-profile',
  templateUrl: 'account-profile.html',
})
export class AccountProfilePage {

  accountData: FirebaseListObservable<Account>;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    private toast: ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad AccountProfilePage');
    // console.log('ionViewDidLoad AccountPage');
    // this.afAuth.authState.subscribe(data => console.log(data));
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid){
      this.toast.create({
        message: `Welcome to MARSSERVICES, ${data.email}`,
        duration: 3000
      }).present();

      this.accountData = this.afDatabase.list(`account/${data.uid}`)
    }
    else {
      this.toast.create({
        message: 'Could not find authentication details!',
        duration: 3000
      }).present();

    }
    });
  }

}
