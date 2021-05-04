import { PublicoComponent } from './publico.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntrarComponent } from './componentes/entrar/entrar.component';
import { RecuperarSenhaComponent } from './componentes/recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  {
    path: '',
    component: PublicoComponent,
    children: [
      {
        path: 'entrar',
        component: EntrarComponent,
      },
      {
        path: 'recuperar-senha',
        component: RecuperarSenhaComponent,
      },
      {
        path: '**',
        component: EntrarComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicoRoutingModule {}
