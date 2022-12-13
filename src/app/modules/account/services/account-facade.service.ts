import { Injectable } from '@angular/core';
import { AccountApiService } from './account-api.service';
import { AccountStateService } from './account-state.service';
import { TokenStorageService } from './token-storage.service';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AccountRegisterCredentials } from '../models/account-register-credentials';
import { AccountLoginCredentials } from '../models/account-login-credentials';
import { Account } from '../models/acoount';
import { Tokens } from '../models/tokens';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AccountFacadeService {

  constructor(
    private accountApi: AccountApiService,
    private accountState: AccountStateService,
    private tokenStorage: TokenStorageService
  ) {}

  get account$() { return this.accountState.account$; }

  isAuthenticated$() : Observable<boolean> {
    return this.account$.pipe(map(account => account.id ? true : false));
  }

  isAuthenticated() : boolean {
    if(this.tokenStorage.tokens.accessToken)
      return true;
    return false;
  }

  register(credentials: AccountRegisterCredentials) : Observable<Tokens> {
    return this.accountApi.register(credentials).pipe(
      tap(response => {
          this.tokenStorage.setTokens({accessToken: response.accessToken, refreshToken: response.refreshToken});
          let data: any = jwtDecode(response.accessToken);
          this.accountState.setAccount({id: data.nameid, username: data.name, email: data.email});
        })
    );
  }

  login(credentials: AccountLoginCredentials) : Observable<Tokens> {
    return this.accountApi.login(credentials).pipe(
      tap(response => {
          this.tokenStorage.setTokens({accessToken: response.accessToken, refreshToken: response.refreshToken});
          let data: any = jwtDecode(response.accessToken);
          this.accountState.setAccount({id: data.nameid, username: data.name, email: data.email});
        })
    );
  }

  logout() : Observable<void> {
    return this.accountApi.logout().pipe(
      tap(() => this.tokenStorage.removeTokens()),
      tap(() => this.accountState.removeAccount())
    );
  }
}