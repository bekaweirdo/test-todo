import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoDetailComponent} from './components/todo-detail/todo-detail.component';

const routes: Routes = [
  {path: 'TodoDetail', component: TodoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}

export const routingComponents = [TodoDetailComponent];
