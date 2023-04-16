import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/shared/store.service';

@Component({
  selector: 'app-months-receitas',
  templateUrl: './months-receitas.component.html',
  styleUrls: ['./months-receitas.component.scss']
})
export class MonthsReceitasComponent implements OnInit{
  month!: string;
  constructor(private storeService: StoreService) {

  }
  ngOnInit() {
    this.getMonthCurrent();
  }
  getMonthCurrent() {
    let date = new Date();
    let dateString = date.toLocaleDateString('pt-br', {month: 'long'})
    let letterDateString = dateString[0].toUpperCase() + dateString.substring(1)
    this.month = letterDateString;
    this.storeService.setStoreMonth(this.month)
  }

}
