import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LugarPage} from "../lugar/lugar";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navegarALugar(name):void {
    this.navCtrl.push(LugarPage, {nombre: name});
  }
}
