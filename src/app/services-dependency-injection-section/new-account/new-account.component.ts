import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SnackBarService } from 'src/app/shared/snack-bar.service';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  selectedStatus = 'none';

  constructor(// private loggingService: LoggingService,
    private accountsService: AccountsService,
    private snackBarService: SnackBarService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => this.snackBarService.openSuccessSnackBar('Status: ' + status, 'Ok')
    );
  }

  ngOnInit(): void {

  }

  onCreateAccount(accountName: string): void {
    this.accountsService.addAccount(accountName, this.selectedStatus);
    // this.loggingService.logStatusChange(this.selectedStatus);
  }
}
