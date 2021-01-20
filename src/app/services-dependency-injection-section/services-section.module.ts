import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ActiveUsersComponent } from './practicing-services/active-users/active-users.component';
import { CounterComponent } from './practicing-services/counter/counter.component';
import { InactiveUsersComponent } from './practicing-services/inactive-users/inactive-users.component';
import { PracticingServicesComponent } from './practicing-services/practicing-services.component';
import { ServicesRequirementComponent } from './practicing-services/services-requirement/services-requirement.component';
import { ServicesDependencyInjectionSectionComponent } from './services-dependency-injection-section.component';


@NgModule({
	declarations: [
		ServicesDependencyInjectionSectionComponent,
		AccountComponent,
		NewAccountComponent,
		PracticingServicesComponent,
		ActiveUsersComponent,
		InactiveUsersComponent,
		CounterComponent,
		ServicesRequirementComponent,
	],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{ path: '', component: ServicesDependencyInjectionSectionComponent },
		])
	]
})
export class ServicesSectionModule {

}
