import { IEndereco } from './../../../../../core/Models/Endereco';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.component.html',
  styleUrls: ['./lista-endereco.component.styl'],
})
export class ListaEnderecoComponent implements OnInit {
  @Input() enderecos: IEndereco[] = [];

  constructor() {}

  ngOnInit() {}
}
