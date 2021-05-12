import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from '../../servicos/endereco/endereco.service';

import { IEndereco } from './../../../../../core/Models/Endereco';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.styl'],
})
export class EnderecoComponent implements OnInit {
  @Input() endereco!: IEndereco;

  loading = false;

  constructor() {}

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
}
