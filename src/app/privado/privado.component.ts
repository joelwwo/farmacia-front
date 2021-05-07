import { Component, OnInit } from '@angular/core';

import { SubjectService } from '../shared/services/subject/subject.service';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.styl'],
})
export class PrivadoComponent implements OnInit {
  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.buscarUsuarioLogado();
  }

  buscarUsuarioLogado(): void {
    this.subjectService.usuario.subscribe((usuario) => {
      if (!usuario) this.subjectService.usuarioLogado().subscribe();
    });
  }
}
