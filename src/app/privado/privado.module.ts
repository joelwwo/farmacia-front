import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { PrivadoRoutingModule } from './privado-routing.module';
import { PrivadoComponent } from './privado.component';

@NgModule({
  declarations: [PrivadoComponent],
  imports: [CommonModule, PrivadoRoutingModule, SharedModule],
})
export class PrivadoModule {}
