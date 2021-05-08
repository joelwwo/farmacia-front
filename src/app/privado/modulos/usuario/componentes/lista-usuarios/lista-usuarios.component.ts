import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { UsuarioService } from '../../servicos/usuario.service';
import { IUsuario } from './../../../../../core/Models/Usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.styl'],
})
export class ListaUsuariosComponent implements OnInit {
  filtro$: Observable<IUsuario[]> | undefined;
  usuarios: IUsuario[] = [];
  private termoBusca = new Subject<string>();

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.buscarUsuarios();
    this.pesquisarUsuario();
  }

  buscarUsuarios(): void {
    this.usuarioService
      .buscarUsuarios()
      .subscribe((usuarios) => (this.usuarios = usuarios));
  }

  pesquisa(termo: string): void {
    if (!termo) this.buscarUsuarios();
    else this.termoBusca.next(termo);
  }

  pesquisarUsuario() {
    this.filtro$ = this.termoBusca.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.usuarioService.pesquisarUsuarios(term))
    );
    this.filtro$.subscribe((res) => (this.usuarios = res));
  }
}
