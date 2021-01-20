import { Component, OnInit } from '@angular/core';
import { ServicesUsersService} from '../../../core/services/services-users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  public inactiveUsers: string[] = [];

  constructor(private usersService: ServicesUsersService) { }

  public ngOnInit(): void {
	this.inactiveUsers = this.usersService.inactiveUsers;
  }

  public onSetToActive(id: number): void {
	this.usersService.setToActive(id);
  }

}
