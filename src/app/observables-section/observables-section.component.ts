import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoutingUser } from '../core/models/routing-user.model';
import { AppUsersService } from '../core/services/app-users.service';


@Component({
  selector: 'app-observables-section',
  templateUrl: './observables-section.component.html',
  styleUrls: ['./observables-section.component.css']
})
export class ObservablesSectionComponent implements OnInit, OnDestroy {

  userActivated = false;
  users: RoutingUser[] = [];
  activateUserSubscription: Subscription | undefined;

  constructor(private router: Router, private usersService: AppUsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    this.usersService.activatedUserEmitter.subscribe((didActivate: boolean) => {
      this.userActivated = didActivate;
    });
  }

  navigateBackToMain(): void {
    this.router.navigateByUrl('');
  }

  ngOnDestroy(): void {
    if (this.activateUserSubscription) {
      this.activateUserSubscription?.unsubscribe();
    }
  }

}
