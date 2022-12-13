import { Injectable } from '@angular/core';
import { CryptHelper } from 'src/app/core/utils/crypt-helper';
import { Tokens } from '../models/tokens';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  get tokens(): Tokens { 
    let json: string = localStorage.getItem('tokens') as string;
    if(json) {
      return CryptHelper.decryptData(json) as Tokens;
    }
    return {accessToken: '', refreshToken: ''};
  }

  constructor() { }

  setTokens(tokens: Tokens) {
    localStorage.setItem('tokens', CryptHelper.encryptData(tokens));
  }

  removeTokens() {
    localStorage.removeItem('tokens');
  }
}