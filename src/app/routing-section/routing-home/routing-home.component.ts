import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-routing-home',
  templateUrl: './routing-home.component.html',
  styleUrls: ['./routing-home.component.css']
})
export class RoutingHomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLoadServers(id: number) {
    // complex actions
    // navigate to servers
    this.router.navigate(['routing/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
  }

  isLoggedIn() {
    return this.authService.loggedIn;
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
