import { IContato } from './../interfaces/interface.contato';
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

  constructor(private contatoService: ContatoService) {
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
     // this.listaContatos[contatoAtual] = contato;

     this.contatoService.editContato(contato, contatoAtual);
      this.msg = 'Contato alterado com sucesso';
      this.novo();
    } else {
      this.contatoService.addContato(contato);
      this.msg = 'Contato incluído com sucesso';
      this.novo();
    }
    this.listaContatos = this.contatoService.getContatos();
    this.busca = '';
  }

  public selecionar(item: IContato): void {
    this.contatoSelecionado = item;
    this.msg = '';
  }
}
