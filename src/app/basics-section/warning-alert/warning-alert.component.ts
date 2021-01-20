import { Component } from '@angular/core';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {
  constructor(private snackBarService: SnackBarService) { }

  public openSnackBar(message: string, action: string): void {
	this.snackBarService.openWarningSnackBar(message, action);
  }

}
