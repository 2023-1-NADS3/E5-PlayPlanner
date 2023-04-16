import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { AddReceitasComponent } from '../add-receitas/add-receitas.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent {
  constructor(private dialog: MatDialog) {

  }
  openDialog() {
    this.dialog.open(AddReceitasComponent, {
      width: '600px',
      data: {
        any: ''
      }
    })
  }
}
