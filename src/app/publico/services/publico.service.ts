import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PublicoService {
  private urlBase = environment.urlBase;

  constructor(private http: HttpClient) {}

  entrar(body: any): Observable<any> {
    return this.http.post<any>(this.urlBase + '/login/', body);
  }
}
