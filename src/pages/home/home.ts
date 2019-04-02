import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@IonicPage()
export class HomePage {

  nomes : any[] = [
    { 'nome' : 'Manuel'},
    { 'nome' : 'Ana'},
    { 'nome' : 'Mônica'},
    { 'nome' : 'Carlos'},
    { 'nome' : 'Patricia'}
  ];

  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController) {
  }

  olaMundo(){
    console.log('Olá Mundo Mobile!');
    this.showAlert();
  }

  irParaTeste(){
    //this.navCtrl.push('TesteIonicPage');
    this.navCtrl.setRoot('TesteIonicPage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Mensagem',
      subTitle: 'Olá mundo Mobile',
      buttons: ['X']
    });
    alert.present();
  }

}
