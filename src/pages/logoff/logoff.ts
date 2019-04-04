import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-logoff',
  templateUrl: 'logoff.html',
})
export class LogoffPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fireAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    this.fireAuth.auth.signOut()
      .then(() => {
      })
      .catch((error: any) => {
      });
  }

}


