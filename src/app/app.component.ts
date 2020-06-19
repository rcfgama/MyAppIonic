import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfigProvider } from './config';
import { Tab2Page } from './intro/tab2.page';
import { TabsPage } from './tabs/tabs.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [
    ConfigProvider
  ]
})
export class AppComponent {
  rootPage: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private configProvider: ConfigProvider
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      let config = this.configProvider.getConfigData();
      if(config == null) {
        this.rootPage = Tab2Page;
        this.configProvider.setConfigData(false);
      } else {
        this.rootPage = TabsPage;
      }

      console.log(config);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
