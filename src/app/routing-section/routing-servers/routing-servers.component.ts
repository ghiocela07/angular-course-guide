import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutingServer } from 'src/app/core/models/routing-server.model';
import { RoutingUser } from 'src/app/core/models/routing-user.model';
import { RoutingServersService } from '../../core/services/routing-servers.service';

@Component({
  selector: 'app-routing-servers',
  templateUrl: './routing-servers.component.html',
  styleUrls: ['./routing-servers.component.css']
})
export class RoutingServersComponent implements OnInit {

  @ViewChild(MatSelectionList, { static: true })
  public serversList: MatSelectionList | undefined;

  public selectedServer: RoutingServer | undefined;
  public servers: RoutingServer[] = [];

  constructor(private serversService: RoutingServersService,
				private router: Router,
				private route: ActivatedRoute) { }

  public ngOnInit(): void {
	this.servers = this.serversService.getServers();
  }

  public onNgModelChange(user: RoutingUser): void {
	this.selectedServer = this.serversList?.selectedOptions.selected[0].value;
	console.log('Selected server: ' + this.selectedServer?.name);
  }

  public onReloadPage(): void {
	this.router.navigate(['../servers'], {relativeTo: this.route});
  }
}
