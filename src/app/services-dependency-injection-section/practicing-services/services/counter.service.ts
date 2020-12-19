import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService {

    @Output() counterChanged = new EventEmitter<void>();
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incremenetActiveToInactive() {
        this.activeToInactiveCounter++;
        this.counterChanged.emit();
    }

    incremenetInactiveToActive() {
        this.inactiveToActiveCounter++;
        this.counterChanged.emit();
    }
}
