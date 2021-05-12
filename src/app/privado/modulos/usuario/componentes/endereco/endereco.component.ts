import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { EnderecoService } from '../../servicos/endereco/endereco.service';

import { IEndereco } from './../../../../../core/Models/Endereco';

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

  /* ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges && simpleChanges.endereco) {
      this.formEndereco.patchValue(simpleChanges.endereco.currentValue);
    }
    if (simpleChanges && simpleChanges.acao) {
      if (simpleChanges.acao.currentValue == 'cadastrar') {
        this.formEndereco.reset();
      }
    }
  } */

  abrirFecharModal(): void {
    this.mostrarModal = !this.mostrarModal;
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
