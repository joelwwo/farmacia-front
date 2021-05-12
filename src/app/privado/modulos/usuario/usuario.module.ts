import { FormEnderecoComponent } from './componentes/form-endereco/form-endereco.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../../shared/shared.module';
import { UsuarioRoutingModule } from './usuario-routing.module';

import { UsuarioComponent } from './usuario.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { DetalheComponent } from './componentes/detalhe/detalhe.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListaEnderecoComponent } from './componentes/lista-endereco/lista-endereco.component';
import { EnderecoComponent } from './componentes/endereco/endereco.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    ListaUsuariosComponent,
    DetalheComponent,
    FormularioComponent,
    ListaEnderecoComponent,
    EnderecoComponent,
    FormEnderecoComponent,
  ],
  imports: [CommonModule, UsuarioRoutingModule, SharedModule],
})
export class UsuarioModule {}
