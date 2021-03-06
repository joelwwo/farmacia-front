import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { PublicoService } from '../../services/publico.service';
import { Mensagens } from 'src/app/core/Utils/Mensagens';
import { SubjectService } from './../../../shared/services/subject/subject.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.styl'],
})
export class EntrarComponent implements OnInit {
  loading = false;
  homologacao = !environment.production;

  login = new FormGroup({
    email: new FormControl(
      this.homologacao ? 'joeldossantossilva21@gmail.com' : null,
      [Validators.email, Validators.required]
    ),
    password: new FormControl(this.homologacao ? 'Joel1234' : null, [
      Validators.minLength(6),
      Validators.required,
    ]),
  });

  constructor(
    private publicoService: PublicoService,
    private subjectService: SubjectService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  entrar() {
    this.loading = true;
    this.publicoService.entrar(this.login.value).subscribe(
      ({ token, user }) => {
        sessionStorage.setItem('token', token.token);
        sessionStorage.setItem('usuario', JSON.stringify(user));
        this.loading = false;
        this.subjectService.setUsuario(user);
        this.router.navigate(['/conta']);
      },
      ({ error }) => {
        Mensagens.erro('Credênciais inválidas', true, 2000);
        this.loading = false;
      }
    );
  }
}
