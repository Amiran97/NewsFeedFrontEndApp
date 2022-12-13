import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CryptHelper } from 'src/app/core/utils/crypt-helper';
import { Account } from '../models/acoount';

@Injectable({
  providedIn: 'root'
})
export class AccountStateService {

  private account: BehaviorSubject<Account>;

  get account$() { return this.account.asObservable(); }

  constructor() { 
    this.account = new BehaviorSubject<Account>({id: '', email: '', username: ''});
    this.loadAccount();
  }

  setAccount(account: Account) : void {
    this.account.next(account);
    this.saveAccount();
  }

  removeAccount() : void {
    this.account.next({id: '', email: '', username: ''});
    localStorage.removeItem('userCredential');
  }

  saveAccount() : void {
    localStorage.setItem('userCredential', CryptHelper.encryptData(this.account.getValue()));
  }

  loadAccount() : void {
    let json: string = localStorage.getItem('userCredential') as string;
    if(json) {
      let account: Account = CryptHelper.decryptData(json) as Account;
      if (account.id && account.username) {
        this.account.next(account);
      }
    }
  }
}