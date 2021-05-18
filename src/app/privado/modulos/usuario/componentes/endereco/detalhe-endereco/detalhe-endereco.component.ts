import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EnderecoService } from '../../../servicos/endereco/endereco.service';

import { IEndereco } from 'src/app/core/Models/Endereco';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-endereco',
  templateUrl: './detalhe-endereco.component.html',
  styleUrls: ['./detalhe-endereco.component.styl'],
})
export class DetalheEnderecoComponent implements OnInit {
  @Input() endereco!: IEndereco;
  @Output() idEndereco: EventEmitter<string> = new EventEmitter();
  mostrarModal = false;

  loading = false;

  constructor(private enderecoService: EnderecoService) {}

  ngOnInit() {}

  abrirModal(): void {
    this.mostrarModal = true;
  }

  fecharModal(endereco?: IEndereco): void {
    this.mostrarModal = false;
    if (endereco) this.endereco = endereco;
  }

  removerAlert(): void {
    Swal.fire({
      text: 'Deseja mesmo remover esse endereço?',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, remover',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) this.remover();
    });
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
