import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IEndereco } from 'src/app/core/Models/Endereco';
import { EnderecoService } from '../../servicos/endereco/endereco.service';

@Component({
  selector: 'app-form-endereco',
  templateUrl: './form-endereco.component.html',
  styleUrls: ['./form-endereco.component.styl'],
})
export class FormEnderecoComponent implements OnInit {
  @Input() endereco!: IEndereco;
  formEndereco!: FormGroup;
  loading = false;

  constructor(private enderecoService: EnderecoService) {}

  ngOnInit() {
    this.iniciarFormulario();
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
    if (this.endereco) this.formEndereco.patchValue(this.endereco);
  }

  cadastrar() {
    this.loading = true;
    const form = this.formEndereco.value;
    this.enderecoService.cadastrarEndereco(form).subscribe(
      (endereco) => {
        this.loading = false;
      },
      (_) => (this.loading = false)
    );
  }

  atualizar() {
    this.loading = true;
    const form = this.formEndereco.value;
    this.enderecoService
      .atualizarEndereco(form, this.endereco?.id || '')
      .subscribe(
        (endereco) => {
          this.loading = false;
        },
        (_) => (this.loading = false)
      );
  }

  orquestarAcao(): void {
    if (this.endereco) this.atualizar();
    else this.cadastrar();
  }
}
