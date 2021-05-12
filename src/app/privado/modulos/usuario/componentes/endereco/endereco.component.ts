import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EnderecoService } from '../../servicos/endereco/endereco.service';

import { IEndereco } from 'src/app/core/Models/Endereco';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.styl'],
})
export class EnderecoComponent implements OnInit {
  @Input() endereco!: IEndereco;
  @Output() idEndereco: EventEmitter<string> = new EventEmitter();
  mostrarModal = false;

  loading = false;

  constructor(private enderecoService: EnderecoService) {}

  ngOnInit() {}

  abrirModal(): void {
    this.mostrarModal = true;
  }

  fecharModal(endereco: IEndereco): void {
    this.mostrarModal = false;
    this.endereco = endereco;
  }

  remover(): void {
    this.loading = true;
    this.enderecoService.removerEndereco(this.endereco?.id).subscribe(
      ({ id }) => {
        this.idEndereco.emit(id);
        this.loading = false;
      },
      (_) => (this.loading = false)
    );
  }
}
