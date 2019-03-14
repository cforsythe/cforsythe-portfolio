import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
