import { TestBed, async } from '@angular/core/testing';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

import { AuthGuard } from '../shared/auth.guard';
import { AuthenticationService } from 'ngx-login-client';
import { LoginService } from '../services/login.service';

class LoginMock implements Partial<LoginService> {
    redirectUrl: string;
}

describe('AuthGuard', () => {

    let authGuard: AuthGuard;
    let loginService: LoginMock;
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);
    const authMock = jasmine.createSpyObj('AuthenticationService', ['isLoggedIn']);

    beforeEach(() => {
        loginService = new LoginMock();
        authGuard = new AuthGuard(authMock, loginService, routerMock);
    });

    it('should be createable', () => expect(authGuard).toBeTruthy());

    it('should return true for canActivate() and not set loginService.redirectUrl when isLoggedIn === true', () => {
        authMock.isLoggedIn.and.returnValue(true);
        const result = authGuard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'testUrl'});
        expect(result).toBe(true);
        expect(loginService.redirectUrl).toBeUndefined();
    });

    it('should return false for canActivate() and set loginService.redirectUrl when isLoggedIn === false', () => {
        authMock.isLoggedIn.and.returnValue(false);
        const result = authGuard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'testUrl'});
        expect(result).toBe(false);
        expect(loginService.redirectUrl).toEqual('testUrl');
    });

});
