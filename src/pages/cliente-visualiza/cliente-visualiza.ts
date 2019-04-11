import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import firebase from 'firebase';
import { Cliente } from '../../model/cliente';



@IonicPage()
@Component({
  selector: 'page-cliente-visualiza',
  templateUrl: 'cliente-visualiza.html',
})
export class ClienteVisualizaPage {

  
  formGroup: FormGroup;

  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  cliente = new Cliente;
  imagem : string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    this.firestore.settings(this.settings);

    this.cliente = this.navParams.get('cliente');

    this.formGroup = this.formBuilder.group({
      nome: [this.cliente.nome],
      telefone: [this.cliente.telefone],
      email: [this.cliente.email],
    })

  }
  ionViewDidLoad(){
    this.downloadFoto();
  }
  atualizar() {
    let ref = this.firestore.collection('cliente')
    ref.doc(this.cliente.id).set(this.formGroup.value)
      .then(() => {
        console.log('Atualizado com sucesso');
        
        this.navCtrl.push('InicioPage')

      }).catch(() => {
        console.log('Erro ao Atualizar');

      })

  }
  enviarArquivo(event){
    let imagem = event.srcElement.files[0]
    //console.log(imagem.name);
    let ref = firebase.storage().ref().child(`clientes/${this.cliente.id}.jpg`);
    ref.put(imagem).then(url=>{
      console.log("Enviado com sucesso!");
      this.downloadFoto();
    })

  }

  downloadFoto(){
    let ref = firebase.storage().ref()
    .child(`cliente/${this.cliente.id}.jpg`);
    ref.getDownloadURL().then( url=>{
      this.imagem = url;
    })
  }

}
