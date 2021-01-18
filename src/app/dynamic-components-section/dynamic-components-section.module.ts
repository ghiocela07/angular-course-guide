import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DynamicComponentsSectionComponent } from './dynamic-components-section.component';


@NgModule({
    declarations: [
        DynamicComponentsSectionComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'dynamic-components', component: DynamicComponentsSectionComponent }
        ])
    ]
})
export class DynamicComponentsSectionModule {

}
