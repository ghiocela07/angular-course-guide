import { templateSourceUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-success-alert',
    templateUrl: './success-alert.component.html',
    styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent {
    constructor(private snackBar: MatSnackBar) { }

    openSnackBar(message: string, action: string): void {
        this.snackBar.open(message, action, {
            duration: 50000,
            panelClass: 'success-snackbar'
        });
    }
}
