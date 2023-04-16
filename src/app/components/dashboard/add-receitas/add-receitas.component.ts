import { DialogRef } from '@angular/cdk/dialog';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { RegisterReceita } from 'src/app/interfaces/registerReceita';
import { ApiService } from 'src/app/services/api.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { StoreService } from 'src/app/shared/store.service';

@Component({
  selector: 'app-add-receitas',
  templateUrl: './add-receitas.component.html',
  styleUrls: ['./add-receitas.component.scss']
})
export class AddReceitasComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  typeRevenue!: string;
  receitas!: Category[];
  month!: string;
  destroy$: Subject<boolean> = new Subject<boolean>();
  months: string[] = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  constructor(private fb: FormBuilder, 
    @Inject(DOCUMENT) private document: any,
    private localStorageService: LocalstorageService,
    private storeService: StoreService,
    private apiService: ApiService,
    private dialogRef: DialogRef<AddReceitasComponent>) {

  }

  ngOnInit() {
    this.initForm();

    this.receitas = [
      {
        name: 'Investimento'
      },
      {
        name: 'Outros'
      },
      {
        name: 'Férias'
      },
      {
        name: '13 Sálario'
      },
      {
        name: 'PLR'
      },
      {
        name: 'Aposentadoria'
      },
      {
        name: 'Aluguel'
      },
      {
        name: 'Salario'
      },
    ]
    this.storeService.getStoreMonth()
    .pipe(takeUntil(this.destroy$))
    .subscribe(res => {
      this.month = res;
    })
    this.preventFutureDate();
  }

  initForm() {
    
    this.form = this.fb.group({
      typeRevenue: [null, Validators.required],
      value: [null, Validators.required],
      dateEntry: [null, Validators.required],
      fixedRevenue: [null],
    })
  }

  preventFutureDate() {
    const inputDate = this.document.querySelector('#dateEntry')
    
    let date = new Date();

    let month: any = date.getMonth() + 1;
    let day: any = date.getDate();
    let year = date.getFullYear();

    if(month < 10) {
      month = '0' + month.toString();
    }
    if(day < 10) {
      day = '0' + day.toString();
    }

    let maxDate = year + '-' + month + '-' + day;

    console.log(maxDate)

    inputDate.max = maxDate
  }

  submit() {
    this.form.patchValue({
      typeRevenue: this.typeRevenue
    })
    
    if(this.isValidForm()) {
      let typeRevenue = this.getValueControl(this.form, 'typeRevenue');
      let value = this.getValueControl(this.form, 'value')
      let user = this.localStorageService.getLocalStorage('user')

      const date = this.getValueControl(this.form, 'dateEntry')


      const dateReplace = date
      .replaceAll('-', '$')
      .replaceAll(' ', '$')
      .split('$')

      let fixedMonth = Number(dateReplace[1] -1)
      let newDate = new Date(dateReplace[0], fixedMonth, dateReplace[2])

      const monthDateSelected = newDate.toLocaleDateString('pt-br', {
        month: 'long'
      })

      const convertUppercase = monthDateSelected[0].toUpperCase() + monthDateSelected.substring(1)

      let indexMonthCurrent = this.searchIndexMonths(convertUppercase)
      let dateEntry = new Date(dateReplace[0], indexMonthCurrent, dateReplace[2])

      const payload = {
        user: {
          title: user,
          month: {
            title: this.month,
            listMonth: {
              typeRevenue,
              value,
              dateEntry
            }
          }
        }
      }
      debugger;
      console.log(this.getValueControl(this.form, 'fixedRevenue'))
      if(this.getValueControl(this.form, 'fixedRevenue')) {
        for(let i=0; i< this.months.length; i++) {
          dateEntry = new Date(dateReplace[0], this.searchIndexMonths(this.months[i]), dateReplace[2])

          const payload = {
            user: {
              title: user,
              month: {
                title: this.months[i],
                listMonth: {
                  typeRevenue,
                  value,
                  dateEntry
                }
              }
            }
          }

          this.apiService.registerRevenues(payload).subscribe()
          this.storeService.setStoreRegisteRevenues(true)
          this.dialogRef.close();
        }
      }

      console.log('olhando o check do fixedRevenue', this.getValueControl(this.form, 'fixedRevenue'))
      this.apiService.registerRevenues(payload)
        .subscribe((res: RegisterReceita) => {
          if(res) {
            this.storeService.setStoreRegisteRevenues(true)
          }
        })

        this.dialogRef.close();
    }

  }

  isValidForm() {
    return this.form.valid;
  }

  getValueControl(form: FormGroup, control: string) {
    return form.controls[control].value;
  }

  searchIndexMonths(monthSearch: any) {
    let index = this.months.findIndex((month) => {
      return month === monthSearch;
    })

    return index;
  }

  ngOnDestroy() {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }
}
