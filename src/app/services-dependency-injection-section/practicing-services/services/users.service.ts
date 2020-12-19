import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";


@Injectable({ providedIn: 'root' })
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService) { }

    setToActive(id: number) {
        const removedUser = this.inactiveUsers.splice(id, 1);
        this.activeUsers.push(removedUser[0]);
        this.counterService.incremenetInactiveToActive();

    }

    setToInactive(id: number) {
        const removedUser = this.activeUsers.splice(id, 1);
        this.inactiveUsers.push(removedUser[0]);
        this.counterService.incremenetActiveToInactive();

    }
}
