import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  selectedStatus: string = 'none';

  constructor(// private loggingService: LoggingService, 
    private accountsService: AccountsService,
    private snackBar: MatSnackBar) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => this.openSnackBar('Status: ' + status, 'Ok')
    );
  }

  ngOnInit(): void {

  }
  onCreateAccount(accountName: string) {
    this.accountsService.addAccount(accountName, this.selectedStatus);
    // this.loggingService.logStatusChange(this.selectedStatus);
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 50000
    });
  }
}
