import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App2Component } from './app2/app2.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KnownsComponent } from './knowns/knowns.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    App2Component,
    HomeComponent,
    AboutComponent,
    KnownsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
