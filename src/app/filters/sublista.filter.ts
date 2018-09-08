import { Pipe, PipeTransform } from '@angular/core';
import { IContato } from '../interfaces/interface.contato';
@Pipe({
    name: 'sublista'
})
export class SubLista implements PipeTransform {
    transform(eventos: IContato[], input: string): IContato[] {
        return eventos.filter(
            evento =>
                evento.nome.toLowerCase().includes(input.toLowerCase()));
    }
}
