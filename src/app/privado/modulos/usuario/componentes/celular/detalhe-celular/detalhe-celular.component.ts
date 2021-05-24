import { ICelular } from './../../../../../../core/Models/Celular';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CelularService } from '../../../servicos/celular/celular.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-celular',
  templateUrl: './detalhe-celular.component.html',
  styleUrls: ['./detalhe-celular.component.styl'],
})
export class DetalheCelularComponent implements OnInit {
  @Input() celular!: ICelular;
  @Output() idCelular: EventEmitter<string> = new EventEmitter();
  mostrarModal = false;

  loading = false;

  constructor(private celularService: CelularService) {}

  ngOnInit(): void {}

  abrirModal(): void {
    this.mostrarModal = true;
  }

  fecharModal(celular?: ICelular): void {
    this.mostrarModal = false;
    if (celular) this.celular = celular;
  }

  removerAlert(): void {
    Swal.fire({
      text: 'Deseja mesmo remover esse contato?',
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
    this.celularService.removerCelular(this.celular?.id).subscribe(
      ({ id }) => {
        this.idCelular.emit(id);
        this.loading = false;
      },
      (_) => (this.loading = false)
    );
  }
}
