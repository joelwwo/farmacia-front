import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './../../servicos/usuario.service';
import { EnderecoService } from './../../servicos/endereco/endereco.service';
import { IEndereco } from './../../../../../core/Models/Endereco';
import { IUsuario } from './../../../../../core/Models/Usuario';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.styl'],
})
export class DetalheComponent implements OnInit {
  usuario!: IUsuario;
  mostrarModal = false;
  enderecoSelecionado: [IEndereco | undefined, number] = [undefined, 0];
  acao: 'cadastrar' | 'alterar' = 'cadastrar';

  constructor(
    private route: ActivatedRoute,
    private EnderecoService: EnderecoService,
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

  fecharModal(): void {
    this.mostrarModal = false;
  }

  fecharEAtualizarEndereco(event: IEndereco | any): void {
    this.usuario.address[this.enderecoSelecionado[1]] = event;
    this.fecharModal();
  }

  selecionarEndereco(endereco: IEndereco, index: number) {
    this.enderecoSelecionado = [endereco, index];
    this.acao = 'alterar';
    this.abrirModal();
  }
}
