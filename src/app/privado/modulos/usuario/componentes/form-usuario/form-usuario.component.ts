import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from '../../servicos/usuario/usuario.service';
import { IUsuario } from './../../../../../core/Models/Usuario';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.styl'],
})
export class FormUsuarioComponent implements OnInit {
  @Input() usuario!: IUsuario;
  @Output() fecharModal: EventEmitter<any> = new EventEmitter();
  loading = false;
  formUsuario!: FormGroup;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario(): void {
    this.formUsuario = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl(null, Validators.email),
      cpf: new FormControl(null),
      type: new FormControl('user'),
      //active: new FormControl(true),
      password: new FormControl(null, Validators.minLength(6)),
    });
    if (this.usuario) this.formUsuario.patchValue(this.usuario);
  }

  orquestarAcao(): void {
    if (this.usuario) this.alterar();
    else this.cadastrar();
  }

  cadastrar() {
    this.loading = true;
    this.usuarioService.cadastrarUsuario(this.formUsuario.value).subscribe(
      (cliente) => {
        this.loading = false;
        this.router.navigate(['/conta/usuarios/' + cliente.id]);
      },
      (_) => (this.loading = false)
    );
  }

  alterar() {
    this.loading = true;
    this.usuarioService
      .atualizarUsuario(this.formUsuario.value, this.usuario.id)
      .subscribe(
        (cliente) => {
          this.loading = false;
          this.fecharModal.emit(cliente);
        },
        (_) => (this.loading = false)
      );
  }
}
