import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class SnackBarService {

    constructor(private matSnackBar: MatSnackBar) { }

    openSuccessSnackBar(message: string, action: string): void {
        this.matSnackBar.open(message, action, {
            duration: 50000,
            panelClass: 'success-snackbar'
        });
    }

    openWarningSnackBar(message: string, action: string): void {
        this.matSnackBar.open(message, action, {
            duration: 50000,
            panelClass: 'warning-snackbar'
        });
    }

    openErrorSnackBar(message: string, action: string): void {
        this.matSnackBar.open(message, action, {
            duration: 50000,
            panelClass: 'error-snackbar'
        });
    }
}
