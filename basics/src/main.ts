import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// Specify the Platform Implementation for compilation
// pass the module to be initialized
// bootstrapModule will return a promise 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
