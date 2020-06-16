import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nome:string = "Ronaldo Gama";
  monthName = new Array ("jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez")
  public date = new Date().getDate() +" de "+ this.monthName [new Date().getMonth()] +" de "+ new Date().getFullYear();

  constructor() { }

  ngOnInit() {    
  }
}
