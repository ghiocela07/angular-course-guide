import { Component, OnInit } from '@angular/core';
import { ServicesUsersService } from '../../../core/services/services-users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  activeUsers: string[] = [];

  constructor(private usersService: ServicesUsersService) { }

  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers;
  }

  onSetToInactive(id: number): void {
    this.usersService.setToInactive(id);
  }


}
