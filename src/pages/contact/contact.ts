import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',

  // template: `
  //   <form [formGroup]="todo" (ngSubmit)="logForm()">
  //     <ion-item>
  //       <ion-label>Todo</ion-label>
  //       <ion-input type="text" formControlName="title"></ion-input>
  //     </ion-item>
  //     <ion-item>
  //       <ion-label>Description</ion-label>
  //       <ion-textarea formControlName="description"></ion-textarea>
  //     </ion-item>
  //     <button ion-button type="submit" [disabled]="!todo.valid">Submit</button>
  //   </form>
  // `
})
export class ContactPage {
	url: string;
  name='';
  email_address='';
  phone='';
  message='';
  // private todo : FormGroup;

  constructor(public navCtrl: NavController,private inAppBrowser: InAppBrowser, private callNumber: CallNumber, public emailComposer: EmailComposer) {
    //this.browser = inAppBrowser;
    // this.todo = this.formBuilder.group({
    //   title: ['', Validators.required],
    //   description: [''],
    // });

  }

   submit_message(){
     let email = {
       to: 'jaffar.yasin@yahoo.com',
       cc: [],
       bcc: [],
       attachment: [],
       subject: 'Contact Us Message from '+this.name,
       body: 'Name: '+this.name+'\n'+'Email Address: '+this.email_address+'\n'+'Phone Number: '+this.phone+'\n'+'\n'+'Message: '+this.message,
       isHtml: false,
       app: "Yahoo"
     };
     this.emailComposer.open(email);


   }
   openWebpage(){
     this.inAppBrowser.create("http://marsservices.com/contact-us", "_self");

   }

   openfacebook(){
     this.inAppBrowser.create("https://www.facebook.com/marsservices", "_self");
   }
   opentwitter(){
     this.inAppBrowser.create("https://www.twitter.com/MarsDFW", "_self");
   }
   openinstagram(){
     this.inAppBrowser.create("https://www.instagram.com/marsservices", "_self");
   }
   openyelp(){
     this.inAppBrowser.create("https://www.yelp.com/biz/mars-services-haltom-city-2", "_self");
   }

   todo = {
     title: ''
   };
     // this.myControl = new FormControl('value', *validation function goes here*, *asynchronous validation function goes here*);
  //   submitform(){
  //    this.myGroup = new formGroup({firstName: new FormControl()});
  // };
   opendialer(phoneNumber){
     this.callNumber.callNumber('8173864084', true);
      // .then(res=> console.log('Launched dialer!', res))
      // .catch(err=> console.log('Error launching dialer!', err));
  }
   // openWebpage(url: string) {
   //  const options: InAppBrowserOptions = {
   //    zoom: 'no'
   //  }
   //
   //  // Opening a URL and returning an InAppBrowserObject
   //  const browser = this.inAppBrowser.create(url, '_self', options);
   //  browser.show();
   //
   //  browser.close();

   // Inject scripts, css and more with browser.X
  //}
  // launch(url){
  //   // this.browser.ready().then(() => {
      //const browser = this.inAppBrowser.create(url, "_self");
  //   };
  // }

  //}
}
