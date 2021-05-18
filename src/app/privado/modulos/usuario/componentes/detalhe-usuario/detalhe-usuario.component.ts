import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IUsuario } from '../../../../../core/Models/Usuario';
import { UsuarioService } from '../../servicos/usuario/usuario.service';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.styl'],
})
export class DetalheUsuarioComponent implements OnInit {
  usuario!: IUsuario;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.buscarUsuario();
  }

  buscarUsuario(): void {
    const id = this.route.snapshot.paramMap.get('id') || '0';
    this.usuarioService
      .buscarUsuario(id)
      .subscribe((usuario) => (this.usuario = usuario));
  }
}
