import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import {
  AuthenticationService,
  AUTH_API_URL,
  WIT_API_PROXY,
  SSO_API_URL,
  REALM
} from 'ngx-login-client';
import { Broadcaster } from 'ngx-base';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';

describe('LoginService', () => {
<<<<<<< HEAD
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthenticationService,
        Broadcaster,
        { provide: AUTH_API_URL, useValue: 'https://auth.prod-preview.openshift.io/api/' },
        { provide: SSO_API_URL, useValue: 'https://sso.prod-preview.openshift.io/api/' },
        { provide: WIT_API_PROXY, useValue: 'https://prod-preview.openshift.io/api/' },
        { provide: REALM, useValue: 'realm' },
        HttpClient,
        HttpHandler,
        { provide: Router }
      ]
    })
  );
  it('should return URL', () => {});
=======
  beforeEach(() => {
     TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      AuthenticationService,
      Broadcaster,
      { provide: AUTH_API_URL, useValue: 'https://auth.example.com' },
      { provide: SSO_API_URL, useValue: 'https://sso.example.com' },
      { provide: WIT_API_PROXY, useValue: 'https://wit.example.com' },
      { provide: REALM, useValue: 'realm' },
    HttpClient,
    HttpHandler,
    {provide: Router}
    ]
  });

});
>>>>>>> userStore test

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
  it('should redirect to Auth', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service.redirectToAuth).toBe('test');
  });
});
