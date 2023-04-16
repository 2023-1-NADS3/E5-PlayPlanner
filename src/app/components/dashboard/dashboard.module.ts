import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    MonthsReceitasComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
