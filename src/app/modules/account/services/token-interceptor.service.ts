import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, Observable, switchMap } from 'rxjs';
import { AccountFacadeService } from './account-facade.service';
import { AccountStateService } from './account-state.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  countFailedAuthRefresh: number = 0;

  constructor(private tokenStorage: TokenStorageService,
    private accountState: AccountStateService,
    private accountFacade: AccountFacadeService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestWithToken = this.addAccessToken(request); 
    return next.handle(requestWithToken).pipe(
      catchError(error => {
        if(error.status == 400 && this.countFailedAuthRefresh > 0) {
          this.tokenStorage.removeTokens();
          this.accountState.removeAccount();
          this.countFailedAuthRefresh = 0;
          this.router.navigate(['/account/signin']);
          return EMPTY;
        }
        else if (error.status == 401) {
          if(this.countFailedAuthRefresh == 0) {
            return this.handleError(request, next);
          } else {
            return next.handle(requestWithToken);
          }
        }
        else if (error.status == 404) {
          this.router.navigate(['/']);
          return next.handle(requestWithToken);
        }
        else {
          return next.handle(requestWithToken);
        }
      })
    );
  }

  addAccessToken(request: HttpRequest<any>) : HttpRequest<any> {
    if (this.tokenStorage.tokens.accessToken)
      return request.clone({setHeaders: { 'Authorization': `Bearer ${this.tokenStorage.tokens.accessToken}` }});
    else
      return request;
  }

  handleError(request: HttpRequest<any>, next: HttpHandler) {
    this.countFailedAuthRefresh++;
    return this.accountFacade.refresh()
    .pipe(
      switchMap(response => {
        let authRequest = this.addAccessToken(request);
        return next.handle(authRequest);
    }));
  }
}