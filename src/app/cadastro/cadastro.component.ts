import { IContato } from './../interfaces/interface.contato';
import { Component } from '@angular/core';
import { ContatoService } from '../services/contato.service';

@Component({
  moduleId: module.id,
  selector: 'cadastro',
  templateUrl: './views/cadastro.component.html'
})
export class CadastroComponent {
  public contatoSelecionado: IContato;
  private novoContato: IContato;
  public listaContatos: IContato[];
  public msg: string;
  public busca: string = '';

  constructor(contatoService: ContatoService) {
    this.listaContatos = contatoService.getContatos();
    this.msg = '';
  }

  public novo() {
    this.novoContato = { nome: '', cpf: '', telefone: '', email: '' };
    this.contatoSelecionado = this.novoContato;
  }

  public incluir(contato: IContato) {
    const contatoAtual = this.listaContatos.indexOf(contato);

    if (contatoAtual > -1) {
      this.listaContatos[contatoAtual] = contato;
      this.msg = 'Contato alterado com sucesso';
      this.novo();
    } else {
      this.listaContatos.push(contato);
      this.msg = 'Contato incluído com sucesso';
      this.novo();
    }

    this.busca = '';
  }

  public selecionar(item: IContato): void {
    this.contatoSelecionado = item;
    this.msg = '';
  }
}
