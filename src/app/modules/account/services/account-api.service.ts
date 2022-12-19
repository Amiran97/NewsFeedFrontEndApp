import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environment';
import { AccountLoginCredentials } from '../models/account-login-credentials';
import { AccountRegisterCredentials } from '../models/account-register-credentials';
import { Tokens } from '../models/tokens';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  private readonly apiUrl: string = environment.ACCOUNT_API_URL;

  constructor(private apiService: ApiService) { }

  register(data: AccountRegisterCredentials) : Observable<Tokens> {
    return this.apiService.post(`${this.apiUrl}/register`, data);
  }

  login(data: AccountLoginCredentials) : Observable<Tokens> {
    return this.apiService.post<Tokens>(`${this.apiUrl}/login`, data);
  }

  refresh(data: Tokens) : Observable<Tokens> {
    return this.apiService.post<Tokens>(`${this.apiUrl}/refresh`, data);
  }

  logout(userName: string) : Observable<void> {
    return this.apiService.post<void>(`${this.apiUrl}/revoke/${userName}`);
  }
}