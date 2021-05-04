import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendasRoutingModule } from './vendas-routing.module';
import { VendasComponent } from './vendas.component';
import { ListaVendasComponent } from './componentes/lista-vendas/lista-vendas.component';

@NgModule({
  declarations: [VendasComponent, ListaVendasComponent],
  imports: [CommonModule, VendasRoutingModule],
})
export class VendasModule {}
