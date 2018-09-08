import { Injectable } from '@angular/core';
import { IContato } from '../interfaces/interface.contato';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class ContatoService {

    //acesso ao HTTP
    public constructor(private _http: Http) { }

    private url: string = 'http://localhost:3200/eventos';

    public getEventosWS(): Observable<IContato[]> {
        return this._http
            .get(this.url)
            .map(res => res.json());
    }

    public setEventoWS(contato: IContato): Observable<IContato> {
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        let json = JSON.stringify(contato);

        return this._http
            .post(this.url, json, options)
            .map(res => res.json());
    }


  public getContatos(): IContato[] {
    return [
      { cpf: '123456789', nome: 'Joao Joao Correia', telefone: '12345678', email: 'jj@gmail.com'},
      { cpf: '098765432', nome: 'Maria de Jesus', telefone: '12345678', email: 'maria@gmail.com'},
      { cpf: '136870754', nome: 'Uelinton Silva Junior', telefone: '12345678', email: 'junior_sk8@gmail.com'},
      { cpf: '876345678', nome: 'Batman', telefone: '12345678', email: 'batman@darkness.com'}
    ];
}
}
