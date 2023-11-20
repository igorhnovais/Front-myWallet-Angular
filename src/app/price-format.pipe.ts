import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'priceFormat'
  })
  export class PriceFormatPipe implements PipeTransform {
    transform(value: number): string {
      if (value == null) {
        return ''; // ou '0,00' ou qualquer valor padrão desejado para valores nulos ou indefinidos
      }
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  }