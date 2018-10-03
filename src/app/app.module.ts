import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { DataStoreService } from './services/data-store.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchUserComponent,
    ShowUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
