import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { RoutingUser } from 'src/app/core/models/routing-user.model';
import { AppUsersService } from 'src/app/core/services/app-users.service';

@Component({
  selector: 'app-routing-users',
  templateUrl: './routing-users.component.html',
  styleUrls: ['./routing-users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild(MatSelectionList, { static: true })
  usersList: MatSelectionList | undefined;

  selectedUser: RoutingUser | undefined;
  users: RoutingUser[] = [];

  constructor(private usersService: AppUsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

  onNgModelChange(user: RoutingUser): void {
    this.selectedUser = this.usersList?.selectedOptions.selected[0].value;
  }

}
