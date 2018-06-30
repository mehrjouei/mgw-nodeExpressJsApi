import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomAuthHttp } from './services/customeAuthHttp.service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { SlimLoadingBarService } from './modules/ng2-slim-loading-bar';
import { ModalService } from './services/modal.service';
import { ConfigService } from './services/config.service';
import { TranslateService } from './services/translate.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { BrowserStorage } from './services/browser-storage.service';
// import { ModalModule } from 'ng2-modal';
import { PreLoadingService } from './services/pre-loading.service';
import { ModalModule } from 'ng2-modal';


import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function getAuthHttp(http: Http) {
  return new AuthHttp(new AuthConfig({
    noJwtError: true,
    tokenGetter: (() => localStorage.getItem("id_token"))
  }), http);
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-left'
    }),
    AppRoutingModule,
    ModalModule
  ],
  providers: [
    TranslateService,
    SlimLoadingBarService,
    ModalService,
    ConfigService,
    CustomAuthHttp,
    AuthGuard,
    AuthenticationService,
    BrowserStorage,
    AuthHttp,
    PreLoadingService,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
