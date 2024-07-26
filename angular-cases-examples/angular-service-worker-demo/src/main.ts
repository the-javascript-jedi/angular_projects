import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environment/environment'
import { enableProdMode } from '@angular/core'; 

if (environment.production) {
  enableProdMode();
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/ngsw-worker.js').then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch(error => {
        console.log('Service Worker registration failed:', error);
      });
    });
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
