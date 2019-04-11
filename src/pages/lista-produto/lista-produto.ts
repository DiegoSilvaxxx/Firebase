import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, MenuController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the ListaProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-produto',
  templateUrl: 'lista-produto.html',
})
export class ListaProdutoPage {

  @ViewChild('email') email;
  @ViewChild('senha') senha;

  constructor(public fireauth: AngularFireAuth,
    public menu: MenuController,
    public toastCtrl: ToastController) {

  }
  ionViewDidload(){
    this.menu.enable(false);
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


