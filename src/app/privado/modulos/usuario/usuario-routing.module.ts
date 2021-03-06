import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './usuario.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { DetalheUsuarioComponent } from './componentes/detalhe-usuario/detalhe-usuario.component';
import { FormUsuarioComponent } from './componentes/form-usuario/form-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      { path: 'lista', component: ListaUsuariosComponent },
      { path: 'formulario', component: FormUsuarioComponent },
      { path: ':id', component: DetalheUsuarioComponent },
      { path: '**', component: ListaUsuariosComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
