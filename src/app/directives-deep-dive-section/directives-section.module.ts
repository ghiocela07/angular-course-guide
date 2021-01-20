import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { DirectivesDeepDiveSectionComponent } from './directives-deep-dive-section.component';


@NgModule({
	declarations: [
		DirectivesDeepDiveSectionComponent,
		BasicHighlightDirective,
		BetterHighlightDirective,
	],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{ path: '', component: DirectivesDeepDiveSectionComponent },
		])
	]
})
export class DirectivesSectionModule {

}
