import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ReceitasCardComponent } from './receitas-card/receitas-card.component';
import { DebitosCardComponent } from './debitos-card/debitos-card.component';
import { BalanceTotalCardComponent } from './balance-total-card/balance-total-card.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { DebitosComponent } from './debitos/debitos.component';
import { FooterComponent } from './footer/footer.component';
import { MessageHourComponent } from './message-hour/message-hour.component';
import { ImgProfileComponent } from './img-profile/img-profile.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material/shared-material.module';
import { CardViewComponent } from './card-view/card-view.component';
import { AddReceitasComponent } from './add-receitas/add-receitas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonthsReceitasComponent } from './months-receitas/months-receitas.component';
import { CURRENCY_MASK_CONFIG, CurrencyMaskModule } from 'ng2-currency-mask';
import  localePt from '@angular/common/locales/pt'
import { ShortenerPipe } from 'src/app/shared/pipes/shortener.pipe';

registerLocaleData(localePt, 'pt')

export const CustomCurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
}

@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    ReceitasCardComponent,
    DebitosCardComponent,
    BalanceTotalCardComponent,
    ReceitasComponent,
    DebitosComponent,
    FooterComponent, 
    MessageHourComponent, 
    ImgProfileComponent, 
    CardViewComponent,
    AddReceitasComponent,
    MonthsReceitasComponent,
    ShortenerPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule
  ],
  providers: [
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ]
})
export class DashboardModule { }
