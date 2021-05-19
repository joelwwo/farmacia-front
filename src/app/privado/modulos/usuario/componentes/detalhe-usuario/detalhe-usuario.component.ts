import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IUsuario } from '../../../../../core/Models/Usuario';
import { UsuarioService } from '../../servicos/usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.styl'],
})
export class DetalheUsuarioComponent implements OnInit {
  usuario!: IUsuario;
  mostrarModal = false;
  loading = false;

  constructor(
    private router: Router,
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

  abrirModal(): void {
    this.mostrarModal = true;
  }

  fecharModal(usuario?: IUsuario): void {
    this.mostrarModal = false;
    if (usuario) this.usuario = { ...this.usuario, ...usuario };
  }

  removerAlert(): void {
    Swal.fire({
      text: 'Deseja mesmo remover ' + this.usuario?.name + '?',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, remover',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) this.remover();
    });
  }

  remover(): void {
    this.loading = true;
    this.usuarioService.removerUsuario(this.usuario.id).subscribe(
      () => {
        this.loading = false;
        this.router.navigate(['conta/usuarios']);
      },
      (_) => (this.loading = false)
    );
  }
}
