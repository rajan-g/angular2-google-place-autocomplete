import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GooglePlaceExample } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(GooglePlaceExample);
