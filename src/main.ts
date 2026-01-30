import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Top-level await is not supported by the current Angular/Webpack build configuration
platformBrowserDynamic().bootstrapModule(AppModule) // NOSONAR
  .catch(error => console.error(error));
