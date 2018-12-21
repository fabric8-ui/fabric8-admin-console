import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UsersContainerComponent } from './users-container.component';
import { UserService, AuthenticationService, AuthInterceptor, SSO_API_URL, WIT_API_PROXY, REALM } from 'ngx-login-client';
import { HttpClient, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Logger, Broadcaster } from 'ngx-base';
import { AUTH_API_URL } from 'ngx-login-client';
import { CacheInterceptor } from 'src/app/shared/cache.interceptor';
import { ADMIN_API_URL } from 'src/app/shared/admin-api';
import { RequestCache } from 'src/app/services/request-cache.service';
import { UserStore } from 'src/app/store/user.store';

describe('UsersContainerComponent', () => {
  let component: UsersContainerComponent;
  let fixture: ComponentFixture<UsersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersContainerComponent ],
      providers: [
        AuthenticationService,
        Broadcaster,
        { provide: AUTH_API_URL, useValue: 'http://auth.example.com/' },
        { provide: SSO_API_URL, useValue: 'http://sso.example.com/' },
        { provide: WIT_API_PROXY, useValue: 'http://wit.example.com/' },
        { provide: ADMIN_API_URL, useValue: 'http://admin.example.com/' },
        { provide: REALM, useValue: 'realm' },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
        HttpClient,
        Logger,
        RequestCache,
        UserService,
        UserStore,
        UserService,
        HttpHandler
      ],
      schemas : [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
