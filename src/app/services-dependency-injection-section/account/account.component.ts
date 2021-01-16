import { Component, Input, OnInit, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account: { name: string, status: string } | undefined;
  @Input() id = -1;

  constructor(// private loggingService: LoggingService,
    private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string): void {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }

}
