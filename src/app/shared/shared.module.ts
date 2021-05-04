import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';
import { MensagensErrosFormsDirective } from './directives/mensagens-erros-forms.directive';
import { ModalComponent } from './components/modal/modal.component';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

/* Pipe(s) */
import { ValorMoedaPipe } from './pipes/valor-moeda.pipe';
import { CustomCurrencyMaskConfig } from '../core/Models/ConfMascara';

@NgModule({
  declarations: [
    MensagensErrosFormsDirective,
    ModalComponent,
    /* Pipe(s) */
    ValorMoedaPipe,
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
    ModalComponent,
    /* Pipe(s) */
    ValorMoedaPipe,
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
  ],
})
export class SharedModule {}
