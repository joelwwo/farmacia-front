import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from './../../servicos/usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.styl'],
})
export class FormularioComponent implements OnInit {
  loading = false;

  cliente = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(null, Validators.email),
    cpf: new FormControl(null),
    /* type: new FormControl('user'),
    active: new FormControl(true), */
    password: new FormControl(null, Validators.minLength(6)),
  });

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  cadastrar() {
    this.loading = true;
    this.usuarioService.cadastrarUsuario(this.cliente.value).subscribe(
      (cliente) => {
        this.loading = false;
        this.router.navigate(['/conta/usuarios/' + cliente.id]);
      },
      (_) => (this.loading = false)
    );
  }

  alterar() {
    this.loading = true;
    this.usuarioService.cadastrarUsuario(this.cliente.value).subscribe(
      (cliente) => {
        this.loading = false;
        this.router.navigate(['/conta/usuarios/' + cliente.id]);
      },
      (_) => (this.loading = false)
    );
  }
}
