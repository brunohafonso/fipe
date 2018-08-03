import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularDraggableModule } from 'angular2-draggable';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormSearchService } from './form-search/form-search.service';


@NgModule({
  declarations: [
    AppComponent,
    FormSearchComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    AngularDraggableModule
  ],
  providers: [FormSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
