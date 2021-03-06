import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  [x: string]: any;
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage'; // <--

  pages: Array<{ title: string, component: string }>;// <--

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public firebaseauth: AngularFireAuth) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage' },// <--
      { title: 'Logoff', component: 'LogoffPage' },
      { title: 'lista de Produto', component: 'InicioProdutoPage' },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.firebaseauth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = 'InicioPage'; //pagina inicial (logado)
          } else {
            this.rootPage = 'HomePage'; //se não houver usuario
          }
        },
        () => {
          this.rootPage = 'InicioPage';//pagina inicial (logado)
        }
      );


  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
