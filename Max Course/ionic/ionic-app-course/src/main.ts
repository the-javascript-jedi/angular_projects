import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from 'ionicons/dist/loader';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
