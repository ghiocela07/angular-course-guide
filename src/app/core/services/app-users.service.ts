import { Injectable } from '@angular/core';
import { RoutingUser } from '../models/routing-user.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppUsersService {
    users: RoutingUser[] = [
        new RoutingUser(1, 'Max'),
        new RoutingUser(2, 'Anna'),
        new RoutingUser(3, 'Chris')
    ];

    activatedUserEmitter = new Subject<boolean>();

    getUsers(): RoutingUser[] {
        return this.users;
    }
}
