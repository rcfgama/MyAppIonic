import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  providers: [
    ProviderService
  ]
})
export class DetalhesPage implements OnInit {
  public filme;

  constructor(
    private route: ActivatedRoute,
    private provide: ProviderService,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.provide.getMovieDetails(id).subscribe(
      data => {
        this.filme = (data as any);
        console.log(this.filme);
      }, error => {
        console.log(error);
      } 
    )
  }

}
