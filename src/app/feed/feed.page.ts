import { Component, ViewChild } from '@angular/core';
import { ProviderService } from '../provider.service';
import { LoadingController, IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [
    ProviderService
  ]
})

export class FeedPage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  public lista_filmes = new Array<any>();
  public page = 1;
  public loading;
  public event;
  public refreshing: boolean = false;

  constructor(
    private provide: ProviderService,
    public loadCtrl: LoadingController,
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

  loadData(event) {
    this.page++;
    this.event = event;
    this.carregarFilmes(true);
  }

  carregarFilmes(newpage: boolean = false) {
    this.presentLoading();
    this.provide.getLatestMovies(this.page).subscribe(
      data => {
        const response = (data as any);
        if (newpage) {
          this.lista_filmes = this.lista_filmes.concat(response.results);
          console.log(this.page);
          console.log(this.lista_filmes);
          this.event.target.complete();
        } else {
          this.lista_filmes = response.results;
        }
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
