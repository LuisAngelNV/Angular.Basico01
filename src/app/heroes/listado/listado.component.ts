import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string [] = ["SpiderMan","IronMan","Hulk","Thor","Capitan America"];
  heroeBorrado: string = "";


  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || "";
  }
}
