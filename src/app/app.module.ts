import { NgModule } from '@angular/core';
import { BrowserModule ,Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LocationStrategy, PathLocationStrategy, DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    // { provide: AuthenticationService },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: Title },
    { provide: DatePipe }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
