import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {Produto} from '../../model/produto'
import firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class  InicioProdutoPage {

  listaDeProdutos: Produto[] = [];
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
    var ref = this.firestore.collection("produto");

    ref.get().then(query => {
      query.forEach(doc => {
        let c = new Produto();
        c.setDados(doc.data());
        c.id = doc.id;
        this.listaDeProdutos.push(c);
      });

    });

  }
  novoProduto() {
    this.navCtrl.push('NovoProdutoPage')
  }

  remove(obj : Produto) {
    var ref = firebase.firestore().collection("produto")
    ref.doc(obj.id).delete()
      .then(() => {
        this.listaDeProdutos = [];
        this.getList();
      }).catch(() => {
        console.log('Erro ao atualizar');
      })

  }
  atualiza(obj : Produto){
    this.navCtrl.push('ProdutoVisualizaPage',{'Produto' : obj})

  }
 
}
