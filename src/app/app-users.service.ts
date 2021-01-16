import { EventEmitter, Injectable } from '@angular/core';
import { User } from './user.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppUsersService {
    users: User[] = [
        new User(1, 'Max'),
        new User(2, 'Anna'),
        new User(3, 'Chris')
    ];

    activatedUserEmitter = new Subject<boolean>();

    getUsers(): User[] {
        return this.users;
    }
}
