import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-novo-cliente',
  templateUrl: 'novo-cliente.html',
})
export class NovoClientePage {

  formGroup: FormGroup;

  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };



  constructor(public navCtrl: NavController,

    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    this.firestore.settings(this.settings);

    this.formGroup = this.formBuilder.group({
      nome: [''],
      telefone: [''],
      email: [''],
    })
  }
                                                                                              
  cadastrar() {
    let ref = this.firestore.collection('cliente')
    ref.add(this.formGroup.value)
      .then(resp => {
        console.log('Cadastrado com sucesso');
        this.navCtrl.setRoot('InicioPage');

      }).catch(() => {
        console.log('Erro ao cadastrar');

      })

  }
}
