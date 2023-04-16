import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { enviremonent } from 'src/enviremonets/enviremonets';
import { donwloadImage } from '../interfaces/downloadImage';
import { LoginUser } from '../interfaces/loginUser';
import { RegisterUser } from '../interfaces/registerUser';
import { UtilsService } from './utils.service';
import { RegisterReceita } from '../interfaces/registerReceita';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private utilsService: UtilsService
    ) { }

  registerUser(user: any): Observable<RegisterUser> {
    const formData = new FormData();

    formData.append('name', user.name)
    formData.append('email', user.email)
    formData.append('age', user.age)
    formData.append('image', user.image)
    formData.append('password', user.password)
    formData.append('confirmPassword', user.confirmPassword)

    return this.httpClient.post<RegisterUser>(enviremonent.BASE_URL + '/auth/register/user', formData)
    .pipe(
      catchError((err) => {
        if(err.status === 0 && err.status !== 404) {
          this.utilsService.showError('Ocorreu um erro na aplicação, tente novamente')
        } else if(err.status === 404) {
          this.utilsService.showError(err.error.message)
        } else {
          this.utilsService.showError('Ocorreu um erro no servidor, tente mais tarde!')
        }

        return throwError(() => err)
      })
    )


  }

  loginUser(user: any): Observable<LoginUser> {

    return this.httpClient.post<LoginUser>(enviremonent.BASE_URL + '/auth/login', user)
    .pipe(
      retry(2),
      catchError((err) => {
        if(err.status === 0 && err.status !== 404) {
          this.utilsService.showError('Ocorreu um erro na aplicação, tente novamente')
        } else if(err.status === 404) {
          this.utilsService.showError(err.error.message)
        } else {
          this.utilsService.showError('Ocorreu um erro no servidor, tente mais tarde!')
        }

        return throwError(() => err)
      })
    )
  }

  donwloadImage(imgName: string): Observable<donwloadImage> {
    const headers = new HttpHeaders().set('imgName', imgName)
      

    return this.httpClient.get<donwloadImage>(enviremonent.BASE_URL + '/download/image', {headers: headers})
      .pipe(catchError((err) => {
        if(err.status === 0 && err.status !== 404) {
          this.utilsService.showError('Ocorreu um erro na aplicação, tente novamente')
        } else if(err.status === 404) {
          this.utilsService.showError(err.error.message)
        } else {
          this.utilsService.showError('Ocorreu um erro no servidor, tente mais tarde!')
        }

        return throwError(() => err)
      })
    )
  }

  registerRevenues(revenue: any): Observable<RegisterReceita> {
    return this.httpClient.post<RegisterReceita>(enviremonent.BASE_URL + '/auth/revenues', revenue)
      .pipe(
        catchError((err) => {
          return throwError(() => err)
        })
      )
  }
}
