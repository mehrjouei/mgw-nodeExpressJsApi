import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AccountService } from '../../services/account.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    Ng2SmartTableModule,
    FormsModule
  ],
  declarations: [ListComponent, CreateComponent],
  providers:[
    AccountService
  ]
})
export class UsersModule { }
