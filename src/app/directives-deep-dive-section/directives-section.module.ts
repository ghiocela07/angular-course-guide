import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BasicHighlightDirecive } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { DirectivesDeepDiveSectionComponent } from './directives-deep-dive-section.component';


@NgModule({
    declarations: [
        DirectivesDeepDiveSectionComponent,
        BasicHighlightDirecive,
        BetterHighlightDirective,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'directives', component: DirectivesDeepDiveSectionComponent },
        ])
    ]
})
export class DirectivesSectionModule {

}
