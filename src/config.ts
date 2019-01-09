import { Injectable } from '@angular/core';


@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const FirebaseAppConfig = {
	storage: {
    apiKey: "AIzaSyAIT6DcC1BAOi1t2-FDjKQBsGq_lpU11EU",
    authDomain: "login-authentication-7d085.firebaseapp.com",
    databaseURL: "https://login-authentication-7d085.firebaseio.com",
    projectId: "login-authentication-7d085",
    storageBucket: "login-authentication-7d085.appspot.com",
    messagingSenderId: "843288759516"
	}
};
