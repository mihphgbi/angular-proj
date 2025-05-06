import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { PreloadAllModules, provideRouter, withHashLocation, withPreloading } from "@angular/router";

import { routes } from "./app.routes";
import { provideAnimations } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withHashLocation(),
      withPreloading(PreloadAllModules)
    ),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(HttpClientModule),
  ],
};
