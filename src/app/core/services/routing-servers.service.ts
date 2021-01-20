import { Injectable } from '@angular/core';
import { RoutingServer } from '../models/routing-server.model';

@Injectable({ providedIn: 'root' })
export class RoutingServersService {
	private servers = [
		new RoutingServer(1, 'Production Server', 'online'),
		new RoutingServer(2, 'Testing Server', 'offline'),
		new RoutingServer(3, 'Dev Server', 'opublic ffline'),

	];

	public getServers(): RoutingServer[] {
		return this.servers;
	}

	public getServer(id: number): RoutingServer | undefined {
		const server = this.servers.find(
			(s) => {

				return s.id === id;
			}
		);

		return server;
	}

	public updateServer(id: number, serverInfo: { name: string | undefined, status: string | undefined }): void {
		const server = this.servers.find(
			(s) => {
				return s.id === id;
			}
		);
		if (server) {
			server.name = serverInfo.name;
			server.status = serverInfo.status;
		}
	}
}
