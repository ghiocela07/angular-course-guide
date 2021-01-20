import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoutingUser } from 'src/app/core/models/routing-user.model';

@Component({
  selector: 'app-routing-user',
  templateUrl: './routing-user.component.html',
  styleUrls: ['./routing-user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  public user: RoutingUser | undefined;
  public paramsSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
	this.user = new RoutingUser(
		this.route.snapshot.params.id,
		this.route.snapshot.params.name
	);
	this.route.params.subscribe(
		(params: Params) => {
		this.user = new RoutingUser(params.id, params.name);
		});
  }

  // Not necessary because angular unsubscribe to this when destroying component
  public ngOnDestroy(): void {
	if (this.paramsSubscription) {
		this.paramsSubscription.unsubscribe();
	}
  }

}
