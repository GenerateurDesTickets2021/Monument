import { Component,OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class testPage implements OnInit {
  urlMonumentDB = `http://192.168.20.142:8080/ionic-auth-app/api/app`;
  movies$: Observable<any>;
  listerihab: Observable<any[]>;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.movies$ = this.httpClient.get(this.urlMonumentDB);
    this.movies$.subscribe(data => {
     // console.log("hhhhhhhhh : ",data);
      this.listerihab=data;
      //this.movies$=data;
  });
  }
  detail(id,nom,image,ville,latitude,longitude){
    const i=id;
    const nav=document.getElementById(i);
    nav.innerHTML=`  
    
    <ion-buttons slot="start">
    <ion-back-button defaultHref="create"></ion-back-button>
  </ion-buttons>
  <center>
  <img width="450" height="200" src="${image}">
  </center>

     <ion-header>
     <ion-card-title> ${nom} 
     Dans ${ville}  </ion-card-title>
          
      </ion-header>
      </center>
      <ion-card-content>
          ${nom} est un Monument du ${ville} avec une latitude : ${latitude} 
          et une longitude : ${longitude}  
      </ion-card-content>
      <center>
      <ion-button expand="full">
      <ion-icon lazy="true" slot="start" name="image"></ion-icon>
      <input type="file" (change)="loadImageFromDevice($event)" id="file-input"
        accept="image/png, image/jpeg">
    </ion-button>`;
    //alert(nom);
     //<ion-label slot="end">Upload Image</ion-label>
  }
}
 

  

//    
