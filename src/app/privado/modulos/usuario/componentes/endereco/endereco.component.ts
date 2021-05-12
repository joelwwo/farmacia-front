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
  @Output() fecharModal: EventEmitter<IEndereco> = new EventEmitter();
  @Input() idUsuario!: string;
  @Input() endereco!: IEndereco | undefined;
  @Input() acao: 'cadastrar' | 'alterar' = 'cadastrar';
  formEndereco!: FormGroup;
  loading = false;

  constructor(private enderecoService: EnderecoService) {
    this.iniciarFormulario();
  }

  ngOnInit() {}

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges && simpleChanges.endereco) {
      this.formEndereco.patchValue(simpleChanges.endereco.currentValue);
    }
    if (simpleChanges && simpleChanges.acao) {
      if (simpleChanges.acao.currentValue == 'cadastrar') {
        this.formEndereco.reset();
      }
    }
  }

  iniciarFormulario(): void {
    this.formEndereco = new FormGroup({
      name: new FormControl(null, Validators.required),
      cep: new FormControl(null),
      publicPlace: new FormControl(null, Validators.required),
      details: new FormControl(null),
      neighborhood: new FormControl(null, Validators.required),
      city: new FormControl('Palmas', Validators.required),
      state: new FormControl('Tocantins', Validators.required),
      location: new FormControl(''),
    });
  }

  cadastrar() {
    this.loading = true;
    const form = this.formEndereco.value;
    form.user_id = this.idUsuario;
    this.enderecoService.cadastrarEndereco(form).subscribe(
      (endereco) => {
        this.loading = false;
        this.fecharModal.emit(endereco);
      },
      (_) => (this.loading = false)
    );
  }

  atualizar() {
    this.loading = true;
    const form = this.formEndereco.value;
    form.user_id = this.idUsuario;
    this.enderecoService
      .atualizarEndereco(form, this.endereco?.id || '')
      .subscribe(
        (endereco) => {
          this.loading = false;
          this.fecharModal.emit(endereco);
        },
        (_) => (this.loading = false)
      );
  }

  orquestarAcao(): void {
    if (this.acao == 'alterar') this.atualizar();
    else this.cadastrar();
  }
}
