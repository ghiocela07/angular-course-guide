import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { RoutingUser } from './routing-user.model';

@Component({
  selector: 'app-routing-users',
  templateUrl: './routing-users.component.html',
  styleUrls: ['./routing-users.component.css']
})
export class RoutingUsersComponent {

  @ViewChild(MatSelectionList, { static: true })
  usersList: MatSelectionList | undefined;

  selectedUser: RoutingUser | undefined;
  users: RoutingUser[] = [
    new RoutingUser(1, 'Max'),
    new RoutingUser(2, 'Anna'),
    new RoutingUser(3, 'Chris')
  ]
  constructor() { }

  onNgModelChange(user: RoutingUser) {
    this.selectedUser = this.usersList?.selectedOptions.selected[0].value;
  }

}
