import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicoRoutingModule } from './publico-routing.module';

import { PublicoComponent } from './publico.component';
import { EntrarComponent } from './componentes/entrar/entrar.component';
import { RecuperarSenhaComponent } from './componentes/recuperar-senha/recuperar-senha.component';

@NgModule({
  declarations: [PublicoComponent, EntrarComponent, RecuperarSenhaComponent],
  imports: [CommonModule, PublicoRoutingModule],
})
export class PublicoModule {}
