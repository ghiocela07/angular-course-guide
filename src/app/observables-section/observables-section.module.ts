import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ObservableHomeComponent } from './observable-home/observable-home.component';
import { ObservableUserComponent } from './observable-user/observable-user.component';
import { ObservablesSectionComponent } from './observables-section.component';


@NgModule({
	declarations: [
		ObservablesSectionComponent,
		ObservableUserComponent,
		ObservableHomeComponent
	],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{
				path: '', component: ObservablesSectionComponent, children: [
					{ path: '', component: ObservableHomeComponent },
					{ path: 'user/:id', component: ObservableUserComponent },

				]
			}
		])
	]
})
export class ObservablesSectionModule {

}
