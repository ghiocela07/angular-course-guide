import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ModulesSectionComponent } from './modules-section.component';


@NgModule({
	declarations: [
		ModulesSectionComponent
	],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{ path: '', component: ModulesSectionComponent }
		])
	]
})
export class ModulesSectionModule {

}
