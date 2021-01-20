import { EventEmitter, Injectable, Output } from '@angular/core';
import { ServicesLoggingService } from './services-logging.service';

@Injectable({ providedIn: 'root' })
export class ServicesAccountsService {

	public accounts = [
		{
			name: 'Master Account',
			status: 'active'
		},
		{
			name: 'Test Account',
			status: 'inactive'
		},
		{
			name: 'Hidden Account',
			status: 'unknown'
		}
	];

	@Output() public statusUpdated = new EventEmitter<string>();

	constructor(private loggingService: ServicesLoggingService) { }

	public addAccount(name: string, status: string): void {
		this.accounts.push({ name, status });
		this.loggingService.logStatusChange(status);
	}

	public updateStatus(id: number, status: string): void {
		this.accounts[id].status = status;
		this.loggingService.logStatusChange(status);
	}
}
