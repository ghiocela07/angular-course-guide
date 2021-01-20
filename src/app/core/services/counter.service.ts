import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {

	@Output() public counterChanged = new EventEmitter<void>();
	public activeToInactiveCounter = 0;
	public inactiveToActiveCounter = 0;

	public incremenetActiveToInactive(): void {
		this.activeToInactiveCounter++;
		this.counterChanged.emit();
	}

	public incremenetInactiveToActive(): void {
		this.inactiveToActiveCounter++;
		this.counterChanged.emit();
	}
}
