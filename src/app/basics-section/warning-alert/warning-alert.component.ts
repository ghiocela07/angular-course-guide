import { Component } from '@angular/core';
import { SnackBarService } from 'src/app/shared/snack-bar.service';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {
  constructor(private snackBarService: SnackBarService) { }

  openSnackBar(message: string, action: string): void {
    this.snackBarService.openWarningSnackBar(message, action);
  }

}
