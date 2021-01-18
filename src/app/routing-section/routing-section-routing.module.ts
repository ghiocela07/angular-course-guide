import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/services/guards/auth-guard.service';
import { CanDeactivateGuard } from '../core/services/guards/can-deactivate-guard.service';
import { RoutingServerResolver } from '../core/services/resolvers/routing-server-resolver.service';
import { RoutingHomeComponent } from './routing-home/routing-home.component';
import { RoutingSectionComponent } from './routing-section.component';
import { RoutingEditServerComponent } from './routing-servers/routing-edit-server/routing-edit-server.component';
import { RoutingServerComponent } from './routing-servers/routing-server/routing-server.component';
import { RoutingServersComponent } from './routing-servers/routing-servers.component';
import { UserComponent } from './routing-users/routing-user/routing-user.component';
import { UsersComponent } from './routing-users/routing-users.component';



const routes: Routes = [
    {
        path: 'routing', component: RoutingSectionComponent,
        children: [
            { path: '', component: RoutingHomeComponent },
            { path: 'home', component: RoutingHomeComponent },
            {
                path: 'users', component: UsersComponent,
                children: [
                    { path: ':id/:name', component: UserComponent },
                ]
            },
            {
                path: 'servers',
                // canActivate: [AuthGuard],
                canActivateChild: [AuthGuard],
                component: RoutingServersComponent,
                children: [
                    { path: ':id/edit', component: RoutingEditServerComponent, canDeactivate: [CanDeactivateGuard] },
                    { path: ':id', component: RoutingServerComponent, resolve: { server: RoutingServerResolver } },
                ]
            },

        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingSectionRoutingModule {

}
