import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'card';
  showDrawBtn = false;
  showCard = false;
  cards : any = [];
  cardsoutside: any = [];
  deck: string | undefined;
  url = 'https://deckofcardsapi.com/api/deck/';
  constructor(private http: HttpClient) {
    
  }
  public  shuffle(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.showDrawBtn = true;

  

  this.http
      .get(this.url + '/new/shuffle')
      .subscribe((res: any) => {
        this.deck = res['deck_id'];
        this.getCard();
        //console.log(this.deck);
      });

    }

    public async getCard(){
      this.showCard = true;


      this.http
      .get(this.url + '/' + this.deck + '/draw/?count=1')
      .subscribe((res: any) => {
         this.cards = res['cards'][0];
         this.cardsoutside = res;
         //console.log(res['deck_id']);

      });

    }

}



