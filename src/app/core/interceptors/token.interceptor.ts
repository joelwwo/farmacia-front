import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private jwt = new JwtHelperService();
  token = '';

  constructor(private router: Router, private http: HttpClient) {}

  private verificarAcesso() {
    const token = sessionStorage.getItem('token') as string;
    this.token = token;
    if (!token || this.jwt.isTokenExpired(token)) {
      this.router.navigate(['/entrar']);
      return false;
    }
    return true;
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.verificarAcesso()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain, */*',
        },
      });
    }
    return next.handle(request);
  }
}
