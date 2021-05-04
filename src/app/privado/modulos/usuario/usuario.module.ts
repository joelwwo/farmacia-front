import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [UsuarioComponent, ListaUsuariosComponent],
  imports: [CommonModule, UsuarioRoutingModule],
})
export class UsuarioModule {}
