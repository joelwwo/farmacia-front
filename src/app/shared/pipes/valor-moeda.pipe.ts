import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valorMoeda',
})
export class ValorMoedaPipe implements PipeTransform {
  transform(valor: any, args?: any): any {
    if (!valor) return '';
    valor = Number(valor);
    const valorFormatado = valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return valorFormatado;
  }
}
