import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BasicsSectionComponent } from './basics-section.component';
import { ComponentsRequirementComponent } from './practicing-components/components-requirement/components-requirement.component';
import { PracticingComponentsComponent } from './practicing-components/practicing-components.component';
import { DatabindingRequirementComponent } from './practicing-databinding/databinding-requirement/databinding-requirement.component';
import { PracticingDatabindingComponent } from './practicing-databinding/practicing-databinding.component';
import { DirectivesRequirementComponent } from './practicing-directives/directives-requirement/directives-requirement.component';
import { PracticingDirectivesComponent } from './practicing-directives/practicing-directives.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';


@NgModule({
    declarations: [
        ServerComponent,
        ServersComponent,
        SuccessAlertComponent,
        WarningAlertComponent,
        PracticingComponentsComponent,
        PracticingDatabindingComponent,
        PracticingDirectivesComponent,
        BasicsSectionComponent,
        ComponentsRequirementComponent,
        DatabindingRequirementComponent,
        DirectivesRequirementComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'basics', component: BasicsSectionComponent }
        ])
    ]
})
export class BasicsSectionModule {

}
