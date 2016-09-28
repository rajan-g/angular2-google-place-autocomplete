import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GooglePlace } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(GooglePlace);
