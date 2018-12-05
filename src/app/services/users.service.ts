import {
  Injectable,
  Inject
} from '@angular/core';
import {
  User,
  AuthenticationService
} from 'ngx-login-client';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { of ,
  Observable
} from 'rxjs';
import {
  map
} from 'rxjs/internal/operators/map';
import {
  ADMIN_API_URL
} from '../shared/admin-api';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  searchUrl: string;
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.authService.getToken()}`
  });

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService,
    @Inject(ADMIN_API_URL) adminUrl: string
  ) {
    this.searchUrl = adminUrl + 'search/users?q=';
  }

  getUsersByName(searchTerm: string): Observable < User[] > {
    if (searchTerm && searchTerm !== '') {
      return this.http
        .get(this.searchUrl +
          encodeURIComponent(searchTerm), {
            headers: this.headers
          })
        .pipe(
          map((response: {
            data: User[]
          }) => response.data)
        );
    }
    return of([]);
  }
}
