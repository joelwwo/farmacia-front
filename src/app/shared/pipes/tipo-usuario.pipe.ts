import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoUsuario',
})
export class TipoUsuarioPipe implements PipeTransform {
  transform(value: any, args?: any): string {
    if (!value) return '';
    switch (value) {
      case 'user':
        return 'Cliente';
      case 'master':
        return 'Adiministrador master';
      case 'query':
        return 'Administrador - apenas consulta';
      case 'edit':
        return 'Administrador - pode editar usuários';
      default:
        return 'Tipo não informado';
    }
  }
}
