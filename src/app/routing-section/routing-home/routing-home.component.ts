import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-routing-home',
  templateUrl: './routing-home.component.html',
  styleUrls: ['./routing-home.component.css']
})
export class RoutingHomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  public ngOnInit(): void {
  }

  public onLoadServers(id: number): void {
	// complex actions
	// navigate to servers
	this.router.navigate(
		['routing/servers', id, 'edit'],
		{
		queryParams:
			{ allowEdit: '1' },
		fragment: 'loading'
		});
  }

  public isLoggedIn(): boolean {
	  return this.authService.loggedIn;
  }

  public onLogin(): void {
	  this.authService.login();
  }

  public onLogout(): void {
	  this.authService.logout();
  }
}
