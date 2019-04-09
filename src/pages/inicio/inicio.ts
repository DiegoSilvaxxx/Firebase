import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Cliente } from '../../model/cliente';
import firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  listaDeClientes: Cliente[] = [];
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController, ) {
  }

  ionViewDidLoad() {
    this.menu.enable(true);
    this.getList();
  }
  getList() {
    var ref = this.firestore.collection("cliente");

    ref.get().then(query => {
      query.forEach(doc => {
        let c = new Cliente();
        c.setDados(doc.data());
        c.id = doc.id;
        this.listaDeClientes.push(c);
      });

    });

  }
  novoCliente() {
    this.navCtrl.push('NovoClientePage')
  }

  remove(obj : Cliente) {
    var ref = firebase.firestore().collection("cliente")
    ref.doc(obj.id).delete()
      .then(() => {
        this.listaDeClientes = [];
        this.getList();
      }).catch(() => {
        console.log('Erro ao atualizar');
      })

  }
  atualiza(obj : Cliente){
    this.navCtrl.push('ClienteVisualizaPage',{'cliente' : obj})

  }
 
}
