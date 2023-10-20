import { enableProdMode } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { defineCustomElements } from '@ionic/pwa-elements/loader'; //componente Progressive Web App para interfaz de cámara desde el navegador

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
// Call the element loader before the bootstrapModule/bootstrapApplication call
defineCustomElements(window); //para llamar al elemento PWA en la ventana del navegador cuando se abra la cámara