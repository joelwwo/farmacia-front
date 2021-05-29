import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { UsuarioService } from '../../servicos/usuario/usuario.service';
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
  mostrarModal = false;
  loading = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.buscarUsuarios();
    this.pesquisarUsuario();
  }

  buscarUsuarios(): void {
    this.loading = true;
    this.usuarioService.buscarUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
        this.loading = false;
      },
      () => (this.loading = false)
    );
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

  alterarStatus(usuario: IUsuario, index: number): void {
    this.usuarioService
      .atualizarUsuario({ active: !usuario.active }, usuario.id)
      .subscribe((usuario) => (this.usuarios[index] = usuario));
  }

  abrirModal(): void {
    this.mostrarModal = true;
  }

  fecharModal(usuario?: IUsuario): void {
    this.mostrarModal = false;
  }
}
