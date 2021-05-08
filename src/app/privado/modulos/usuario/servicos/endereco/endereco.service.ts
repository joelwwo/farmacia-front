import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Mensagens } from './../../../../../core/Utils/Mensagens';
import { IEndereco } from 'src/app/core/Models/Endereco';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  private urlBase = environment.urlBase;

  constructor(private http: HttpClient) {}

  cadastrarEndereco(body: object): Observable<IEndereco> {
    return this.http.post<IEndereco>(this.urlBase + '/address', body).pipe(
      tap(
        (usuario) => {
          Mensagens.sucesso('Cadastro realizado com sucesso!');
          return of(usuario);
        },
        ({ error }) => Mensagens.erro(error)
      )
    );
  }

  atualizarEndereco(body: object): Observable<IEndereco> {
    return this.http.put<IEndereco>(this.urlBase + '/address', body).pipe(
      tap(
        (usuario) => {
          Mensagens.sucesso('Endereço atualizado!');
          return of(usuario);
        },
        ({ error }) => Mensagens.erro(error)
      )
    );
  }

  removerEndereco(id: string): Observable<IEndereco> {
    return this.http.delete<IEndereco>(this.urlBase + '/address/' + id).pipe(
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
