import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { IUsuario } from './../../../../core/Models/Usuario';
import { Mensagens } from './../../../../core/Utils/Mensagens';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private urlBase = environment.urlBase;

  constructor(private http: HttpClient) {}

  buscarUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(this.urlBase + '/user/findBy').pipe(
      tap(
        (usuarios) => of(usuarios),
        ({ error }) => Mensagens.erro(error)
      )
    );
  }

  pesquisarUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(this.urlBase + '/users').pipe(
      tap(
        (usuarios) => of(usuarios),
        ({ error }) => Mensagens.erro(error)
      )
    );
  }

  cadastrarUsuario(body: object): Observable<IUsuario> {
    return this.http.post<IUsuario>(this.urlBase + '/users', body).pipe(
      tap(
        (usuario) => {
          Mensagens.sucesso('Cadastro realizado com sucesso!');
          return of(usuario);
        },
        ({ error }) => Mensagens.erro(error)
      )
    );
  }

  atualizarUsuario(body: object): Observable<IUsuario> {
    return this.http.put<IUsuario>(this.urlBase + '/users', body).pipe(
      tap(
        (usuario) => {
          Mensagens.sucesso('Dados atualizados');
          return of(usuario);
        },
        ({ error }) => Mensagens.erro(error)
      )
    );
  }

  removerUsuario(id: string): Observable<IUsuario> {
    return this.http.delete<IUsuario>(this.urlBase + '/users/' + id).pipe(
      tap(
        (usuario) => {
          Mensagens.sucesso('Usuário removido');
          return of(usuario);
        },
        ({ error }) => Mensagens.erro(error)
      )
    );
  }
}
