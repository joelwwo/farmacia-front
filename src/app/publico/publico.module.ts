import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicoRoutingModule } from './publico-routing.module';
import { SharedModule } from './../shared/shared.module';

import { PublicoComponent } from './publico.component';
import { EntrarComponent } from './componentes/entrar/entrar.component';
import { RecuperarSenhaComponent } from './componentes/recuperar-senha/recuperar-senha.component';

@NgModule({
  declarations: [PublicoComponent, EntrarComponent, RecuperarSenhaComponent],
  imports: [CommonModule, PublicoRoutingModule, SharedModule],
})
export class PublicoModule {}
