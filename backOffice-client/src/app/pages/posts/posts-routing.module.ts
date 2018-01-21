import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [{
  path: '',
  component: PostsComponent,
  children: [
  {
    path: 'list',
    component: ListComponent,
  }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule { }

export const routedComponents = [
  PostsComponent,
  ListComponent
];
