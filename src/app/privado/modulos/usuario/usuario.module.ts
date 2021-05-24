import { FormEnderecoComponent } from './componentes/endereco/form-endereco/form-endereco.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../../shared/shared.module';
import { UsuarioRoutingModule } from './usuario-routing.module';

import { UsuarioComponent } from './usuario.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { FormUsuarioComponent } from './componentes/form-usuario/form-usuario.component';
import { ListaEnderecoComponent } from './componentes/endereco/lista-endereco/lista-endereco.component';
import { DetalheEnderecoComponent } from './componentes/endereco/detalhe-endereco/detalhe-endereco.component';
import { DetalheUsuarioComponent } from './componentes/detalhe-usuario/detalhe-usuario.component';
import { FormCelularComponent } from './componentes/celular/form-celular/form-celular.component';
import { DetalheCelularComponent } from './componentes/celular/detalhe-celular/detalhe-celular.component';
import { ListaCelularComponent } from './componentes/celular/lista-celular/lista-celular.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    ListaUsuariosComponent,
    DetalheUsuarioComponent,
    FormUsuarioComponent,
    ListaEnderecoComponent,
    DetalheEnderecoComponent,
    FormEnderecoComponent,
    FormCelularComponent,
    DetalheCelularComponent,
    ListaCelularComponent,
  ],
  imports: [CommonModule, UsuarioRoutingModule, SharedModule],
})
export class UsuarioModule {}
