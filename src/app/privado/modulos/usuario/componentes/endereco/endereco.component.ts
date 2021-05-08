import { IEndereco } from './../../../../../core/Models/Endereco';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.styl'],
})
export class EnderecoComponent implements OnInit {
  @Input() endereco!: IEndereco | undefined;
  @Input() acao: 'cadastrar' | 'alterar' = 'cadastrar';
  formEndereco!: FormGroup;
  loading = false;

  constructor() {
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
      details: new FormControl(null, Validators.required),
      neighborhood: new FormControl(null, Validators.required),
      city: new FormControl('Palmas', Validators.required),
      state: new FormControl('Tocantins', Validators.required),
      location: new FormControl('', Validators.required),
    });
  }
}
