import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsSectionComponent } from './forms-section.component';
import { FormsComponent } from './forms/forms.component';
import { FormsRequirementComponent } from './parcticing-forms/forms-requirement/forms-requirement.component';
import { FormsSolutionComponent } from './parcticing-forms/forms-solution/forms-solution.component';
import { ParcticingFormsComponent } from './parcticing-forms/parcticing-forms.component';
import { PracticingReactiveFormsComponent } from './practicing-reactive-forms/practicing-reactive-forms.component';
import { ReactiveFormsRequirementComponent } from './practicing-reactive-forms/reactive-forms-requirement/reactive-forms-requirement.component';
import { ReactiveFormsSolutionComponent } from './practicing-reactive-forms/reactive-forms-solution/reactive-forms-solution.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


@NgModule({
	declarations: [
		FormsSectionComponent,
		FormsComponent,
		ReactiveFormsComponent,
		ParcticingFormsComponent,
		FormsRequirementComponent,
		FormsSolutionComponent,
		PracticingReactiveFormsComponent,
		ReactiveFormsRequirementComponent,
		ReactiveFormsSolutionComponent,
	],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{ path: '', component: FormsSectionComponent }
		])
	]
})
export class FormsSectionModule {

}
