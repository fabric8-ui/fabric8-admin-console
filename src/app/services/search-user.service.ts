import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataStoreService } from '../services/data-store.service';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  private baseURL = `auth.openshift.com/api/search/users?q=`;
  private apiResult;
  private result_Subscription: Subscription;
  // tslint:disable-next-line:max-line-length
  private token = `eyJhbGciOiJSUzI1NiIsImtpZCI6IjBsTDB2WHM5WVJWcVpNb3d5dzh1TkxSX3lyMGlGYW96ZFFrOXJ6cTJPVlUiLCJ0eXAiOiJKV1QifQ.eyJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vYXV0aC5vcGVuc2hpZnQuaW8iLCJodHRwczovL29wZW5zaGlmdC5pbyJdLCJhcHByb3ZlZCI6dHJ1ZSwiYXVkIjoiZmFicmljOC1vbmxpbmUtcGxhdGZvcm0iLCJhdXRoX3RpbWUiOjE1Mzg1NjQ3MDUsImF6cCI6ImZhYnJpYzgtb25saW5lLXBsYXRmb3JtIiwiZW1haWwiOiJyYWphc2luZ0ByZWRoYXQuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV4cCI6MTU0MTE1NjcwNSwiZmFtaWx5X25hbWUiOiJTSU5HSCIsImdpdmVuX25hbWUiOiJSQUpBVCIsImlhdCI6MTUzODU2NDcwNSwiaXNzIjoiaHR0cHM6Ly9zc28ub3BlbnNoaWZ0LmlvL2F1dGgvcmVhbG1zL2ZhYnJpYzgiLCJqdGkiOiIwZDIxMzQxNy1mNWQ5LTRhNWEtODFlYy03ZTZlMjlmNDMzNGIiLCJuYW1lIjoiUkFKQVQgU0lOR0giLCJuYmYiOjAsInByZWZlcnJlZF91c2VybmFtZSI6InJhamFzaW5nIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19LCJicm9rZXIiOnsicm9sZXMiOlsicmVhZC10b2tlbiJdfX0sInNlc3Npb25fc3RhdGUiOiI1MDAyOTVjZC04ZjBiLTQ5ZTYtOTJhNS0yNzkyM2ExOTAxOGQiLCJzdWIiOiIzNjJjMzkyOS01ZjkyLTQ0MTAtOGQzYi1kOTIyYzJhNTU0YzEiLCJ0eXAiOiJCZWFyZXIifQ.i-pvc7Rdzymp6loIsG2egfAbZ8vbd841V7JX4HM23DnK9zh1IG_2VYrWj1_69GLvikMECTPPJz-Og3KhQFLA6tjKjsP4sjIOEPPYK58tyho5D6b0dOXlQAthboLqbCUk1M--WTh3Cd-DsX7PVeIvMPEgobqgxpWZfUBsLG-V7mjZAgBN95APTiTETx4qeOYshjSto6EmyoNTcDEkMG858ExW2fm5qN7OUPo4oTAr0YKpLjFNvBNqlI6QjzCls7huQG9YJlMrknLMeGWAP6sd7TSew2co7ZTvXST78-pol4Nt3hWICRv52AjCkRR6HAnNNuUpT9cZOhEMgU0o-iGn3A`;

  constructor(
    private http: HttpClient,
    private savedata: DataStoreService
    ) {
  }

  public foo(user) {
    this.get_users(user);
  }

  public get_users(username: string = null) {
    if (username != null) {
      console.log('(in search-user Service) SUCCESS: received username ' + username + ' from app');

      this.hitAPI(username);

    } else {
      console.log('(in search-user Service) ERROR: did not receive username from app ' + username);
    }
  }

  private hitAPI(username) {
    const readyURL = `${this.baseURL}${username}`;

    if (username !== '') {

      console.log('(in search-user Service) calling API with URL ' + readyURL);

      this.apiResult = this.http.get(readyURL, {
       headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
      });
      this.savedata.store_user(this.apiResult);
    } else {
      console.log('(in search-user Service) ERROR: invalid username ' + username);
    }
  }

  private saveUser(api_result: Observable<any>) {

    let users;
    api_result.subscribe(
      res => users = res,
      err => {
        console.log('(in search-user Service) ERROR: no response from server due either of the following reasons:');
        console.log('*User does not exist\n *Bad Connection');
        console.log(err);
        alert('User not Found!!');
      },
      () => {
        console.log('(in search-user Service) SUCCESS: fetched users');
        console.log(users);
      }
      );

    console.log('(in search-user Service) saving users in data-store');
    this.savedata.store_user(users);
  }
}
