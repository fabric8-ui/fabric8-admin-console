import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Broadcaster, Logger } from 'ngx-base';
import { UserService } from '../services/user.service';
import { AUTH_API_URL, SSO_API_URL, WIT_API_PROXY, AuthenticationService, REALM, User } from 'ngx-login-client';
import { ADMIN_API_URL } from '../shared/admin-api';
import { HttpHandler, HttpHeaders } from '@angular/common/http';

describe('Service: User service', () => {
  let httpMock: HttpTestingController;
  let userService: UserService;
  let broadcaster: Broadcaster;
  let url: string;
  let authservice: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: AUTH_API_URL, useValue: 'https://auth.example.com/' },
        { provide: SSO_API_URL, useValue: 'https://sso.example.com/auth' },
        { provide: WIT_API_PROXY, useValue: 'https://wit.example.com'},
        { provide: ADMIN_API_URL, useValue: 'https://admin.example.com/api/'},
        { provide: REALM, useValue: 'realm' },
        Broadcaster,
        Logger,
        AuthenticationService,
        HttpHandler,
        UserService
      ]
    });
    httpMock = TestBed.get(HttpTestingController);
    url = TestBed.get(ADMIN_API_URL);
    broadcaster = TestBed.get(Broadcaster);
    userService = TestBed.get(UserService);
    authservice = TestBed.get(AuthenticationService);
  });


  it('Get user by user name returns valid user', (done) => {
    const testUser = [{
      'attributes': {
        'fullName': 'name',
        'imageURL': '',
        'username': 'myUser'
      },
      'id': 'userId',
      'type': 'userType'
    }];
    userService.getUsersByName('name').subscribe((user: User[]) => {
      expect(user[0].id).toEqual('userId');
      done();
    });
    const req = httpMock.expectOne(`${url}search/users?q=name`);
    expect(req.request.method).toEqual('GET');
    req.flush({data: testUser}, {status: 201, statusText: ''});
  });

  it('Get user by user name returns null if no user matched', (done) => {
    userService.getUsersByName('nouserId').subscribe((user) => {
      expect(user).toBeNull();
      done();
    });
    const req = httpMock.expectOne(request => request.method === 'GET'
      && request.url === `https://admin.example.com/api/search/users?q=name`);
    // req.flush({data: testUser});
  });
});
