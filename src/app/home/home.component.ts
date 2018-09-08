import { IContato } from './../interfaces/interface.contato';
import { Component } from '@angular/core';
import { ContatoService } from '../services/contato.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: './views/home.component.html'
})
export class HomeComponent {

  public listaContatos: IContato[];

  constructor(contatoService: ContatoService) {
    this.listaContatos = contatoService.getContatos();
  }


}
