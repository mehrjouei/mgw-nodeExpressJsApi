/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbLoginComponent } from './shared/login/login.compnent';
import { AuthenticationService } from './services/authentication.service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { CustomAuthHttp } from './services/customeAuthHttp.service';
import { BrowserStorage } from './services/browser-storage.service';
import { ConfigService } from './services/config.service';
export function getAuthHttp(http: Http) {
  return new AuthHttp(new AuthConfig({
    noJwtError: true,
    tokenGetter: (() => localStorage.getItem("id_token"))
  }), http);
}
@NgModule({
  declarations: [AppComponent,NbLoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    CustomAuthHttp,
    BrowserStorage,
    ConfigService,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
    AuthenticationService,
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
