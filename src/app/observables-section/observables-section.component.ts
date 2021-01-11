import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppUsersService } from '../app-users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-observables-section',
  templateUrl: './observables-section.component.html',
  styleUrls: ['./observables-section.component.css']
})
export class ObservablesSectionComponent implements OnInit, OnDestroy {

  userActivated = false;
  users: User[] = [];
  activateUserSubscription: Subscription | undefined;
  constructor(private router: Router, private usersService: AppUsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    this.usersService.activatedUserEmitter.subscribe((didActivate: boolean) => {
      this.userActivated = didActivate;
    })
  }

  navigateBackToMain() {
    this.router.navigateByUrl('');
  }

  ngOnDestroy() {
    if (this.activateUserSubscription) {
      this.activateUserSubscription?.unsubscribe();
    }
  }

}
