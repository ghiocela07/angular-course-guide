import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../../user.model';

@Component({
  selector: 'app-routing-user',
  templateUrl: './routing-user.component.html',
  styleUrls: ['./routing-user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  user: User | undefined
  paramsSubscription: Subscription | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = new User(
      this.route.snapshot.params['id'],
      this.route.snapshot.params['name']
    );
    this.route.params.subscribe(
      (params: Params) => {
        this.user = new User(params['id'], params['name']);
      });
  }

  // Not necessary because angular unsubscribe to this when destroying component
  ngOnDestroy() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }

}
