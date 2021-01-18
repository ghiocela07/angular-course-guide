import { Component, Input, OnInit, Output } from '@angular/core';
import { ServicesAccountsService } from '../../core/services/services-accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [ServicesLoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account: { name: string, status: string } | undefined;
  @Input() id = -1;

  constructor(// private loggingService: ServicesLoggingService,
    private accountsService: ServicesAccountsService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string): void {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }

}
