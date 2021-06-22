import { Component,OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  urlTheMovieDB = `http://192.168.20.142:8080/ionic-auth-app/api/appUser`;
  items$: Observable<any>;
  listerihab: Observable<any[]>;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    //les villes
    this.items$ = this.httpClient.get(this.urlTheMovieDB);
    this.items$.subscribe(data => {
     // console.log("hhhhhhhhh : ",data);
      this.listerihab=data;
      //this.movies$=data;
  });
  }
  detailVille(id,nom,image,ville,latitude,longitude){
    const d=id;
    const l=document.getElementById(d);
    //const cards=document.getElementById("cards");
    //cards.innerHTML=``;
    l.innerHTML=`
    <ion-item><centre><strong>${ville}</strong></center></ion-item>
  
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
        `
  }
  // <ion-label slot="end">Upload Image</ion-label>
}