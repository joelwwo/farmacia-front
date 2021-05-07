import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { IUsuario } from './../../../../core/Models/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private urlBase = environment.urlBase;

  constructor(private http: HttpClient) {}

  buscarUsuarios(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/users');
  }

  cadastrarUsuario(body: object): Observable<IUsuario> {
    return this.http.post<IUsuario>(this.urlBase + '/users', body);
  }
}
