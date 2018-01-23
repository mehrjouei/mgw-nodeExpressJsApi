import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ComponentsRoutingModule, routedComponents } from './posts-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    ComponentsRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class PostsModule { }
