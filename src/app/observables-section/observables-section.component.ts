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

  public userActivated = false;
  public users: RoutingUser[] = [];
  public activateUserSubscription: Subscription | undefined;

  constructor(private router: Router, private usersService: AppUsersService) { }

  public ngOnInit(): void {
	this.users = this.usersService.getUsers();
	this.usersService.activatedUserEmitter.subscribe((didActivate: boolean) => {
		this.userActivated = didActivate;
	});
  }

  public navigateBackToMain(): void {
	this.router.navigateByUrl('');
  }

  public ngOnDestroy(): void {
	if (this.activateUserSubscription) {
		this.activateUserSubscription?.unsubscribe();
	}
  }

}
