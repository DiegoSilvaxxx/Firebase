import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, MenuController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@IonicPage()
export class HomePage {

  @ViewChild('email') email;
  @ViewChild('senha') senha;

  constructor(public fireauth: AngularFireAuth,
    public menu: MenuController,
    public toastCtrl: ToastController) {

  }

  login() {
    this.fireauth.auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
      .then(() => {
        this.presentToast("logado com sucesso!");
      }).catch(() => {
        this.presentToast("Usuario inválido");

      });
  }
  cadastrar() {
    this.fireauth.auth.createUserWithEmailAndPassword(this.email.value, this.senha.value)
      .then(() => {
        this.presentToast("logado com sucesso!");
      }).catch(() => {
        this.presentToast("Usuario inválido");

      })
  }
  presentToast(msg : string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}


