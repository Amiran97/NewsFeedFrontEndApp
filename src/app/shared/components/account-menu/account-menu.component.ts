import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountFacadeService } from 'src/app/modules/account/services/account-facade.service';

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.pug',
  styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent {

  constructor(public accountFacade: AccountFacadeService) {}

  onLogoutClick() {
    this.accountFacade.logout().subscribe();
  }
}