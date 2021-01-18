import { templateSourceUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';

@Component({
    selector: 'app-success-alert',
    templateUrl: './success-alert.component.html',
    styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent {
    constructor(private snackBarService: SnackBarService) { }

    openSnackBar(message: string, action: string): void {
        this.snackBarService.openSuccessSnackBar(message, action);
    }
}
