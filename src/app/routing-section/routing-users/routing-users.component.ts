import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { AppUsersService } from 'src/app/app-users.service';
import { UsersService } from 'src/app/services-dependency-injection-section/practicing-services/services/users.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-routing-users',
  templateUrl: './routing-users.component.html',
  styleUrls: ['./routing-users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild(MatSelectionList, { static: true })
  usersList: MatSelectionList | undefined;

  selectedUser: User | undefined;
  users: User[] = [];
  constructor(private usersService: AppUsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  onNgModelChange(user: User) {
    this.selectedUser = this.usersList?.selectedOptions.selected[0].value;
  }

}
