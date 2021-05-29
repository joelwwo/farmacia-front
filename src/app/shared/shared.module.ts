import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';
import { MensagensErrosFormsDirective } from './directives/mensagens-erros-forms.directive';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { CustomCurrencyMaskConfig } from '../core/Models/ConfMascara';

/* Pipe(s) */
import { ValorMoedaPipe } from './pipes/valor-moeda.pipe';
import { TipoUsuarioPipe } from './pipes/tipo-usuario.pipe';
import { SafeURLPipe } from './pipes/safeURL.pipe';
import { SafeHTMLPipe } from './pipes/safeHTML.pipe';

// componentes
import { ModalComponent } from './components/modal/modal.component';
import { ButtonComponent } from './components/button/button.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    MensagensErrosFormsDirective,
    /* Componentes */
    ModalComponent,
    ButtonComponent,
    LoadingComponent,
    /* Pipe(s) */
    ValorMoedaPipe,
    TipoUsuarioPipe,
    SafeHTMLPipe,
    SafeURLPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    CurrencyMaskModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    CurrencyMaskModule,
    MensagensErrosFormsDirective,
    /* Componentes */
    ModalComponent,
    ButtonComponent,
    LoadingComponent,
    /* Pipe(s) */
    ValorMoedaPipe,
    TipoUsuarioPipe,
    SafeHTMLPipe,
    SafeURLPipe,
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
  ],
})
export class SharedModule {}
