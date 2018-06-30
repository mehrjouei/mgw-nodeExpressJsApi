import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { BrowserStorage } from '../services/browser-storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  providers:[
    AuthenticationService,
    BrowserStorage
  ],
  declarations: [LoginComponent,AuthComponent]
})
export class AuthModule { }
