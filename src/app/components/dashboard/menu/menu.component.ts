import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { donwloadImage } from 'src/app/interfaces/downloadImage';
import { ApiService } from 'src/app/services/api.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
 messageHour!: string;
 showNameUser!: string;
 isDefaultImage = '../../../assets/image/default (1).png';
 imageUser!: SafeResourceUrl;

constructor(private localStorageService: LocalstorageService,
  private apiService: ApiService,
  private sanitizer: DomSanitizer,
  private router: Router) {

}

ngOnInit(){
  this.getNameUser();
  this.getImageUser();
}

getImageUser() {
  const nameImage = this.localStorageService.getLocalStorage('userInfo')
  this.apiService.donwloadImage(nameImage.image).subscribe((res: donwloadImage) => {
    let url = 'data:image/jpg;base64,' + res.image
    this.imageUser = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  })
}

 getMessageHour(message: string) {
  this.messageHour = message;
  console.log('a mensagem chegou do filho -->', message)
 }

 getNameUser() {
  const nameUser = this.localStorageService.getLocalStorage('userInfo')
  this.showNameUser = nameUser.name;
 }

 logout() {
  this.localStorageService.removeLocalStorage('token')
  this.router.navigate(['/'])
 }
}
