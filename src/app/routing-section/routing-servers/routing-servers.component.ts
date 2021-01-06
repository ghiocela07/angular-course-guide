import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutingUser } from '../routing-users/routing-user.model';
import { RoutingServer } from './routing-server.model';
import { RoutingServersService } from './routing-servers.service';

@Component({
  selector: 'app-routing-servers',
  templateUrl: './routing-servers.component.html',
  styleUrls: ['./routing-servers.component.css']
})
export class RoutingServersComponent implements OnInit {

  @ViewChild(MatSelectionList, { static: true })
  serversList: MatSelectionList | undefined;

  selectedServer: RoutingServer | undefined;
  servers: RoutingServer[] = []
  constructor(private serversService: RoutingServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onNgModelChange(user: RoutingUser) {
    this.selectedServer = this.serversList?.selectedOptions.selected[0].value;
    console.log('Selected server: ' + this.selectedServer?.name);
  }

  onReloadPage(){
    this.router.navigate(['../servers'], {relativeTo: this.route});
  }
}
