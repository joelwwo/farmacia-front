import { IEndereco } from './../../../../../core/Models/Endereco';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.styl'],
})
export class EnderecoComponent implements OnInit {
  @Input() endereco!: IEndereco;

  constructor() {}

  ngOnInit() {}
}
