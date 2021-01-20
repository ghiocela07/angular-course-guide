
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FilterPipe } from './pipe/filter.pipe';
import { ReversePipe } from './pipe/reverse.pipe';
import { ShortenPipe } from './pipe/shorten.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { PipesSectionComponent } from './pipes-section.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipesRequirementComponent } from './practicing-pipes/pipes-requirement/pipes-requirement.component';
import { PipesSolutionComponent } from './practicing-pipes/pipes-solution/pipes-solution.component';
import { PracticingPipesComponent } from './practicing-pipes/practicing-pipes.component';


@NgModule({
	declarations: [
		PipesSectionComponent,
		PipesComponent,
		PracticingPipesComponent,
		PipesRequirementComponent,
		PipesSolutionComponent,
		ShortenPipe,
		FilterPipe,
		ReversePipe,
		SortPipe,
	],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{ path: '', component: PipesSectionComponent }
		])
	]
})
export class PipesSectionModule {

}
