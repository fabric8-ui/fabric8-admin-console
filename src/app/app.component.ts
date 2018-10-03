import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { SearchUserService } from './services/search-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private loginService: LoginService,
    private searchuserService: SearchUserService
  ) {}

  handleLogin() {
    console.log('Login workflow started');
    this.loginService.initLogin();
  }

  onUserSearch(username: string = null) {
    if (username != null) {

      console.log('(in app Component) SUCCESS: recieved user ' + username);
      console.log('(in app Component) calling search-user service with username ' + username);

      this.searchuserService.getusers(username);

    } else {
      console.log('(in app Component) ERROR: username not recieved from search component ' + username);
    }
  }
}
