import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';


@Injectable({ providedIn: 'root' })
export class ServicesUsersService {
	public activeUsers = ['Max', 'Anna'];
	public inactiveUsers = ['Chris', 'Manu'];

	constructor(private counterService: CounterService) { }

	public setToActive(id: number): void {
		const removedUser = this.inactiveUsers.splice(id, 1);
		this.activeUsers.push(removedUser[0]);
		this.counterService.incremenetInactiveToActive();

	}

	public setToInactive(id: number): void {
		const removedUser = this.activeUsers.splice(id, 1);
		this.inactiveUsers.push(removedUser[0]);
		this.counterService.incremenetActiveToInactive();

	}
}
