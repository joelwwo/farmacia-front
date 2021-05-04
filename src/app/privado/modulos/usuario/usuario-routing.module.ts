import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './usuario.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      { path: 'lista', component: ListaUsuariosComponent },
      { path: '**', component: ListaUsuariosComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
