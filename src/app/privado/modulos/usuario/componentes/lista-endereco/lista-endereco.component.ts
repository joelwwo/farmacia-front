import { Component, Input, OnInit } from '@angular/core';

import { IEndereco } from 'src/app/core/Models/Endereco';

@Component({
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.component.html',
  styleUrls: ['./lista-endereco.component.styl'],
})
export class ListaEnderecoComponent implements OnInit {
  @Input() enderecos: IEndereco[] = [];
  @Input() idUsuario: string = '';
  mostrarModal = false;

  constructor() {}

  ngOnInit() {}

  fecharModal(endereco: IEndereco): void {
    this.mostrarModal = false;
    this.enderecos.push(endereco);
  }

  abrirModal(): void {
    this.mostrarModal = true;
  }

  removerItem(id: string): void {
    this.enderecos.forEach((endereco, index) => {
      if (endereco.id == id) this.enderecos.splice(index, 1);
    });
  }
}
