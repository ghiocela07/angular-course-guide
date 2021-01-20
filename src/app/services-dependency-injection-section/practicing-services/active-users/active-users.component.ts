import { Component, OnInit } from '@angular/core';
import { ServicesUsersService } from '../../../core/services/services-users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  public activeUsers: string[] = [];

  constructor(private usersService: ServicesUsersService) { }

  public ngOnInit(): void {
	this.activeUsers = this.usersService.activeUsers;
  }

  public onSetToInactive(id: number): void {
	this.usersService.setToInactive(id);
  }


}
