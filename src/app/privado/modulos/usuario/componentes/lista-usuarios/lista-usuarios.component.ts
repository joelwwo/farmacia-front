import { IUsuario } from './../../../../../core/Models/Usuario';
import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../servicos/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.styl'],
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: IUsuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  buscarUsuarios(): void {
    this.usuarioService
      .buscarUsuarios()
      .subscribe((usuarios) => (this.usuarios = usuarios));
  }
}
