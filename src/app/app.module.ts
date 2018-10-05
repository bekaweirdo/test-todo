import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DisplayComponent } from './components/display/display.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayComponent,
    TodoItemComponent,
    TodoDetailComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
