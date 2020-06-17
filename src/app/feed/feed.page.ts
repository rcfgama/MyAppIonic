import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public objeto_feed = {
    titulo:"Ronaldo Gama",
    data:"Novembro 15, 1995",
    descricao:"Eu sou pica das galaxias!!",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }
  
  constructor() { }

  ngOnInit() {    
  }
}
