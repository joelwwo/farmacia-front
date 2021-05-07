import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IUsuario } from 'src/app/core/Models/Usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private _usuario = new BehaviorSubject<any>(null);
  urlBase = environment.urlBase;

  constructor(private http: HttpClient) {}

  get usuario(): Observable<any> {
    return this._usuario.asObservable();
  }

  setUsuario(usuario: IUsuario) {
    this._usuario.next(usuario);
  }

  usuarioLogado(): Observable<IUsuario> {
    return this.http
      .get<IUsuario>(`${this.urlBase}/user/sessionUser`)
      .pipe(tap((usuario) => this.setUsuario(usuario)));
  }
}
