// bootstrap 
// first file to be executed
// load angular app module into browser

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
 
platformBrowserDynamic()
        .bootstrapModule(AppModule);
