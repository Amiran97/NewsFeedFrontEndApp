import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountFacadeService } from 'src/app/modules/account/services/account-facade.service';
import { ToastService } from '../../services/toast-service.service';

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.pug',
  styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent {

  constructor(public accountFacade: AccountFacadeService,
    private toaster: ToastService) {}

  onLogoutClick() {
    this.accountFacade.logout().subscribe(() => this.toaster.showSuccess("You logouted!"));
  }
}