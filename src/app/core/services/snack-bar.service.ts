import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class SnackBarService {

	constructor(private matSnackBar: MatSnackBar) { }

	public openSuccessSnackBar(message: string, action: string): void {
		this.matSnackBar.open(message, action, {
			duration: 50000,
			panelClass: 'success-snackbar'
		});
	}

	public openWarningSnackBar(message: string, action: string): void {
		this.matSnackBar.open(message, action, {
			duration: 50000,
			panelClass: 'warning-snackbar'
		});
	}

	public openErrorSnackBar(message: string, action: string): void {
		this.matSnackBar.open(message, action, {
			duration: 50000,
			panelClass: 'error-snackbar'
		});
	}
}
