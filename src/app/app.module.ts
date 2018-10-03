import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AUTH_API_URL, AuthenticationService, SSO_API_URL, REALM, WIT_API_PROXY, AuthInterceptor } from 'ngx-login-client';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Broadcaster } from 'ngx-base';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    Broadcaster,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: AUTH_API_URL, useValue: 'https://auth.prod-preview.openshift.io/api/' },
    { provide: SSO_API_URL, useValue: 'https://sso.prod-preview.openshift.io/api/' },
    { provide: WIT_API_PROXY, useValue: 'https://prod-preview.openshift.io/api/' },
    { provide: REALM, useValue: 'realm' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
