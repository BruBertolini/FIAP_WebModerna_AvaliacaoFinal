import { Injectable } from '@angular/core';
import { IContato } from '../interfaces/interface.contato';
import 'rxjs/Rx';

@Injectable()
export class ContatoService {

  listaLocalContatos: IContato[];

  public constructor() {
    this.listaLocalContatos = [];
    this.listaLocalContatos = this.loadContatos();
  }

  public getContatos(): IContato[] {
    return  this.listaLocalContatos;
  }

  public addContato(contato: IContato){
    this.listaLocalContatos.push(contato);
  }

  public editContato(contato: IContato, posicao: number){
      this.listaLocalContatos[posicao] = contato;
  }

  public loadContatos(): IContato[] {
    return [
      {
        cpf: '123456789',
        nome: 'Joao Joao Correia',
        telefone: '12345678',
        email: 'jj@gmail.com'
      },
      {
        cpf: '098765432',
        nome: 'Maria de Jesus',
        telefone: '12345678',
        email: 'maria@gmail.com'
      },
      {
        cpf: '136870754',
        nome: 'Uelinton Silva Junior',
        telefone: '12345678',
        email: 'junior_sk8@gmail.com'
      },
      {
        cpf: '876345678',
        nome: 'Batman',
        telefone: '12345678',
        email: 'batman@darkness.com'
      }
    ];
  }
}
