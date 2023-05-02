import { Dialog } from '@angular/cdk/dialog';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AddReceitasComponent } from '../add-receitas/add-receitas.component';
import { MatDialog } from '@angular/material/dialog';
import { StoreService } from 'src/app/shared/store.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ApiService } from 'src/app/services/api.service';
import { ListReceitas } from 'src/app/interfaces/listReceitas';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit, AfterViewInit {
  monthSelected!: string;
  user!: string;
  loading = false;
  emptyResult = false;
  arrRevenues: any[] = [];
  public dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'tipoReceita',
    'valor',
    'dataEntrada',
    '_id',
    'acoes'
  ]
  @ViewChild('paginator') paginator!: MatPaginator
  constructor(private dialog: MatDialog, private storeService: StoreService, private localStorageService: LocalstorageService, private apiService: ApiService) {

  }

  ngOnInit() {
    

    this.storeService.getStoreRegisteRevenues().subscribe(res => {
      if(res) {
        this.getRegisterRevenues(this.monthSelected)
      }
    })

    this.storeService.getStoreMonth().subscribe(res => {
      this.monthSelected = res;
    })
  }

  ngAfterViewInit() {
    this.getRegisterRevenues(this.monthSelected);
  }

  getRegisterRevenues(monthSelected: string) {
    this.user = this.localStorageService.getLocalStorage('user')
    this.apiService.getRegisterRevenues(monthSelected, this.user)
      .subscribe((res: ListReceitas) => {
        this.loading = true;

        let arr: any[] = [];

        if(res.result.length === 0) {
          this.emptyResult = true;
          this.arrRevenues = [];
        } else {
          this.emptyResult =  false;
          this.arrRevenues = arr;

          setTimeout(() => {
            this.dataSource.paginator =  this.paginator;
          }, 2001);
          res.result.forEach((element: any) => {
            arr.push(element.user.month.listMonth);
          })
        }

        setTimeout(() => {
          this.dataSource.data = arr;
          this.dataSource.paginator = this.paginator;
          this.loading = false;
        }, 2000);
      })
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
