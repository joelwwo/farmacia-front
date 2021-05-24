import { Component, Input, OnInit } from '@angular/core';

import { ICelular } from './../../../../../../core/Models/Celular';

@Component({
  selector: 'app-lista-celular',
  templateUrl: './lista-celular.component.html',
  styleUrls: ['./lista-celular.component.styl'],
})
export class ListaCelularComponent implements OnInit {
  @Input() celulares: ICelular[] = [];
  @Input() idUsuario: string = '';
  mostrarModal = false;

  constructor() {}

  ngOnInit(): void {}

  fecharModal(celular?: ICelular): void {
    this.mostrarModal = false;
    if (celular) this.celulares.push(celular);
  }

  abrirModal(): void {
    this.mostrarModal = true;
  }

  removerItem(id: string): void {
    this.celulares.forEach((celular, index) => {
      if (celular.id == id) this.celulares.splice(index, 1);
    });
  }
}
