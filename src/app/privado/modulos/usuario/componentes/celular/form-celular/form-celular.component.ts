import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ICelular } from './../../../../../../core/Models/Celular';
import { CelularService } from './../../../servicos/celular/celular.service';

@Component({
  selector: 'app-form-celular',
  templateUrl: './form-celular.component.html',
  styleUrls: ['./form-celular.component.styl'],
})
export class FormCelularComponent implements OnInit {
  @Input() celular!: ICelular;
  @Output() fecharModal: EventEmitter<any> = new EventEmitter();
  @Input() idUsuario: string = '';
  loading = false;
  formCelular!: FormGroup;

  constructor(private celularService: CelularService) {}

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario(): void {
    this.formCelular = new FormGroup({
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      number: new FormControl(null, Validators.required),
    });
    if (this.celular) this.formCelular.patchValue(this.celular);
  }

  cadastrar() {
    this.loading = true;
    const form = this.formCelular.value;
    form.user_id = this.idUsuario;
    this.celularService.cadastrarCelular(form).subscribe(
      (celular) => {
        this.loading = false;
        this.fecharModal.emit(celular);
      },
      (_) => (this.loading = false)
    );
  }

  atualizar() {
    this.loading = true;
    const form = this.formCelular.value;
    this.celularService
      .atualizarCelular(form, this.celular?.id || '')
      .subscribe(
        (celular) => {
          this.loading = false;
          this.celular = celular;
          this.fecharModal.emit(celular);
        },
        (_) => (this.loading = false)
      );
  }

  orquestarAcao(): void {
    if (this.celular) this.atualizar();
    else this.cadastrar();
  }
}
