import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./modulos/usuario/usuario.module').then((m) => m.UsuarioModule),
  },
  {
    path: 'vendas',
    loadChildren: () =>
      import('./modulos/vendas/vendas.module').then((m) => m.VendasModule),
  },
  {
    path: '**',
    redirectTo: 'usuarios',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivadoRoutingModule {}
