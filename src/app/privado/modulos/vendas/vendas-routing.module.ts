import { VendasComponent } from './vendas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaVendasComponent } from './componentes/lista-vendas/lista-vendas.component';

const routes: Routes = [
  {
    path: '',
    component: VendasComponent,
    children: [
      { path: 'lista', component: ListaVendasComponent },
      { path: '**', component: ListaVendasComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendasRoutingModule {}
