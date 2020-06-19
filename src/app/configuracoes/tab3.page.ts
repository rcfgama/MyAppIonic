import { Component } from '@angular/core';
import { PerfilPage } from '../perfil/perfil.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  rootPage = PerfilPage;

  constructor(
    public router: Router
  ) {}

  abrirPerfil() {
    this.router.navigate(['/tabs/perfil']);
  }

  abrirSobre() {
    this.router.navigate(['/tabs/sobre']);
  }

}
