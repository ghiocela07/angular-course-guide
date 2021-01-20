import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppUsersService } from 'src/app/core/services/app-users.service';

@Component({
  selector: 'app-observable-user',
  templateUrl: './observable-user.component.html',
  styleUrls: ['./observable-user.component.css']
})
export class ObservableUserComponent implements OnInit {

  public id = -1;

  constructor(private route: ActivatedRoute, private usersService: AppUsersService) {
  }

  public ngOnInit(): void {
	  this.route.params.subscribe((params: Params) => {
		  this.id = +params.id;
  	});
  }

  public onActivate(): void {
	  this.usersService.activatedUserEmitter.next(true);
  }

}
