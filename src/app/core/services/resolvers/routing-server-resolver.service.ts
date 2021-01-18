import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingServer } from '../../models/routing-server.model';
import { RoutingServersService } from '../routing-servers.service';

@Injectable({ providedIn: 'root' })
export class RoutingServerResolver implements Resolve<RoutingServer>{

    constructor(private serversService: RoutingServersService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RoutingServer> |
        Promise<RoutingServer> | RoutingServer {
        const server = this.serversService.getServer(+route.params.id);

        return (server) ? server : new RoutingServer(-1, '', '');
    }
}
