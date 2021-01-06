import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoutingUser } from '../routing-user.model';

@Component({
  selector: 'app-routing-user',
  templateUrl: './routing-user.component.html',
  styleUrls: ['./routing-user.component.css']
})
export class RoutingUserComponent implements OnInit, OnDestroy {

  user: RoutingUser | undefined
  paramsSubscription: Subscription | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = new RoutingUser(
      this.route.snapshot.params['id'],
      this.route.snapshot.params['name']
    );
    this.route.params.subscribe(
      (params: Params) => {
        this.user = new RoutingUser(params['id'], params['name']);
      });
  }

  // Not necessary because angular unsubscribe to this when destroying component
  ngOnDestroy() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }

}
