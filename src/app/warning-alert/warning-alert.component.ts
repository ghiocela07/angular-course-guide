import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {
  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 50000,
      panelClass: 'warning-snackbar'
    });
  }

}
