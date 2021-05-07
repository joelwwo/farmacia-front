import { Mensagens } from './../core/Utils/Mensagens';
import { IUsuario } from './../core/Models/Usuario';
import { Component, OnInit } from '@angular/core';

import { SubjectService } from '../shared/services/subject/subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.styl'],
})
export class PrivadoComponent implements OnInit {
  usuarioLogado: IUsuario | any;

  constructor(private subjectService: SubjectService, private router: Router) {}

  ngOnInit(): void {
    this.buscarUsuarioLogado();
  }

  buscarUsuarioLogado(): void {
    this.subjectService.usuario.subscribe((usuario) => {
      this.usuarioLogado = usuario;
      if (!usuario) this.subjectService.usuarioLogado().subscribe();
    });
  }

  ngOnDestroy(): void {
    sessionStorage.clear();
  }

  sair(): void {
    console.log(location.pathname.slice(1));
    Mensagens.sucesso('Você saiu do sistema', true);
    this.router.navigate(['/home']);
  }
}
