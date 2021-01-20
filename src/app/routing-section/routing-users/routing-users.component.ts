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
  public usersList: MatSelectionList | undefined;

  public selectedUser: RoutingUser | undefined;
  public users: RoutingUser[] = [];

  constructor(private usersService: AppUsersService) { }

  public ngOnInit(): void {
	this.users = this.usersService.getUsers();
  }

  public onNgModelChange(user: RoutingUser): void {
	this.selectedUser = this.usersList?.selectedOptions.selected[0].value;
  }

}
