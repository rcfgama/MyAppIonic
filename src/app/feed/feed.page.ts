import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [
    ProviderService
  ]
})

export class FeedPage {
  public objeto_feed = {
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  public lista_filmes = new Array<any>();
  public loading;
  public event;
  public refreshing: boolean = false;

  constructor(
    private provide: ProviderService,
    public loadCtrl: LoadingController
  ) { }

  async presentLoading() {
    this.loading = await this.loadCtrl.create({
      message: 'Carregando...',
    });
     await this.loading.present();
  
     await this.loading.dismiss();
  }

  doRefresh(event) {
    this.event = event;
    this.refreshing = true;

    this.carregarFilmes();
  }

  ionViewDidEnter() { 
    this.carregarFilmes();
  }

  carregarFilmes() {
    this.presentLoading();
    this.provide.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        this.lista_filmes = response.results;
        console.log(response);
        if(this.refreshing) {
          this.event.target.complete();
          this.refreshing = false;
        }
      }, error => {
        console.log(error);
        if(this.refreshing) {
          this.event.target.complete();
          this.refreshing = false;
        }
      }
    )
  }
}
