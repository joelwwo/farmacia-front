import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Mensagens } from './../../../../../core/Utils/Mensagens';
import { ICelular } from './../../../../../core/Models/Celular';

@Injectable({
  providedIn: 'root',
})
export class CelularService {
  private urlBase = environment.urlBase;

  constructor(private http: HttpClient) {}

  cadastrarCelular(body: object): Observable<ICelular> {
    return this.http.post<ICelular>(this.urlBase + '/cellphones', body).pipe(
      tap(
        (celular) => {
          Mensagens.sucesso('Cadastro realizado com sucesso!');
          return of(celular);
        },
        ({ error }) => Mensagens.erro(error)
      )
    );
  }

  atualizarCelular(body: object, id = ''): Observable<ICelular> {
    return this.http
      .put<ICelular>(this.urlBase + '/cellphones/' + id, body)
      .pipe(
        tap(
          (celular) => {
            Mensagens.sucesso('Contato atualizado!');
            return of(celular);
          },
          ({ error }) => Mensagens.erro(error)
        )
      );
  }

  removerCelular(id = ''): Observable<ICelular> {
    return this.http.delete<ICelular>(this.urlBase + '/cellphones/' + id).pipe(
      tap(
        (celular) => {
          Mensagens.sucesso('Contato removido');
          return of(celular);
        },
        ({ error }) => Mensagens.erro(error)
      )
    );
  }
}
