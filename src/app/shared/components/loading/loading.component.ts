import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.styl'],
})
export class LoadingComponent implements OnInit {
  @Input() imagem = './assets/imagens/loading.svg';
  @Input() loading = false;

  constructor() {}

  ngOnInit() {}
}
