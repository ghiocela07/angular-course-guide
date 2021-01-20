import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RoutingHomeComponent } from './routing-home/routing-home.component';
import { RoutingSectionRoutingModule } from './routing-section-routing.module';
import { RoutingSectionComponent } from './routing-section.component';
import { RoutingEditServerComponent } from './routing-servers/routing-edit-server/routing-edit-server.component';
import { RoutingServerComponent } from './routing-servers/routing-server/routing-server.component';
import { RoutingServersComponent } from './routing-servers/routing-servers.component';
import { UserComponent } from './routing-users/routing-user/routing-user.component';
import { UsersComponent } from './routing-users/routing-users.component';


@NgModule({
	declarations: [
		RoutingSectionComponent,
		RoutingHomeComponent,
		RoutingServersComponent,
		RoutingServerComponent,
		RoutingEditServerComponent,
		UsersComponent,
		UserComponent,
	],
	imports: [
		SharedModule,
		RoutingSectionRoutingModule
	]
})
export class RoutingSectionModule {

}
