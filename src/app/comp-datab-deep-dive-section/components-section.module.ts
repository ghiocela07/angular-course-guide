import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CockpitComponent } from './cockpit/cockpit.component';
import { CompDatabDeepDiveSectionComponent } from './comp-datab-deep-dive-section.component';
import { EvenComponent } from './practicing-property-event-binding/even/even.component';
import { GameControlComponent } from './practicing-property-event-binding/game-control/game-control.component';
import { OddComponent } from './practicing-property-event-binding/odd/odd.component';
import { PracticingPropertyEventBindingComponent } from './practicing-property-event-binding/practicing-property-event-binding.component';
import { PropertyEventBindingRequirementComponent } from './practicing-property-event-binding/property-event-binding-requirement/property-event-binding-requirement.component';
import { ServerElementComponent } from './server-element/server-element.component';


@NgModule({
    declarations: [
        ServerElementComponent,
        GameControlComponent,
        OddComponent,
        EvenComponent,
        CompDatabDeepDiveSectionComponent,
        CockpitComponent,
        PracticingPropertyEventBindingComponent,
        PropertyEventBindingRequirementComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'components', component: CompDatabDeepDiveSectionComponent }
        ])
    ]
})
export class ComponentsSectionModule {

}
