import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public allowNewServer = false;
  public serverCreationStatus = 'No server was created.';
  public serverName = 'Test Server';
  public serverCreated = false;
  public servers = ['Test Server', 'Test Server 2'];

  constructor() {
	setTimeout(() => {
		this.allowNewServer = true;
	}, 2000);
  }

  public ngOnInit(): void {
  }

  public onCreateServer(): void {
	this.serverCreated = true;
	this.servers.push(this.serverName);
	this.serverCreationStatus = 'Server was created! Name is : ' + this.serverName + '.';
  }

  public onUpdateServerName(event: Event): void {
	this.serverName = (event.target as HTMLInputElement).value;
  }

}
