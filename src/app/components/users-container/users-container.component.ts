import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { User, AUTH_API_URL, AuthenticationService } from 'ngx-login-client';
import { Subscription, Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { UserStore } from '../../store/user.store';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ADMIN_API_URL } from 'src/app/shared/admin-api';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css']
})
export class UsersContainerComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();
  users: User[];
  isSubscriptionError: boolean;
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.authService.getToken()}`
});
  private searchUrl: string;

  constructor(
    private http: HttpClient,
    // private userService: UserService,
    private userStore: UserStore,
    private authService: AuthenticationService,
    @Inject(ADMIN_API_URL) adminUrl: string
   ) {
    this.searchUrl = adminUrl + 'search/users?page%5Blimit%5D=10&q=';
    }

  ngOnInit() {
  }

  searchUsers(searchTerm: string): void {
    this.subscriptions.add(
      this.getUsersByName(searchTerm)
        .subscribe((users: User[]) => {
          this.users = users;
          this.userStore.addUsers(users);
        },
         err => {
          this.isSubscriptionError = false;
        }
      )
    );
  }
  getUsersByName(searchTerm: string): Observable<User[]> {
    if (searchTerm && searchTerm !== '') {
      return this.http
        .get(this.searchUrl +
        encodeURIComponent(searchTerm), {headers: this.headers})
        .pipe(
          map((response: {data: User[]}) => response.data)
        );
    }
    return of([]);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
