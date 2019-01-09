import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  // first_name: string;
  // last_name: string;
  // email_address: string;
  // phone_number: string;
  // password: string;
  // repassword: string;
  constructor(private afAuth: AngularFireAuth,


    public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad RegisterPage');
  // }

  async register(user: User){
    try{
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if(result){
        this.navCtrl.setRoot('AccountPage');
      }
      // console.log(result);
    }
    catch (e){
      console.error(e);
    }
    // if(this.first_name == " " ||
    //    this.last_name ==" "  ||
    //    this.email_address ==" "  ||
    //    this.phone_number ==" "  ||
    //    this.password ==" "  ||
    //    this.repassword ==" " );
       // alert("Please fill in all fields.");
  }
}
