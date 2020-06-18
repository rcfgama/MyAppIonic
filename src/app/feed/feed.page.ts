import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [
    ProviderService
  ]
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

  public lista_filmes = new Array<any>();

  constructor(
    private provide: ProviderService
  ) { }

  ngOnInit() { 
    this.provide.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        this.lista_filmes = response.results;
        console.log(response);
      }, error => {
        console.log(error);
      }
    )
  }

}
