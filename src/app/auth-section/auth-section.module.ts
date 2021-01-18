import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthSectionComponent } from './auth-section.component';


@NgModule({
    declarations: [
        AuthSectionComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'authentication', component: AuthSectionComponent }
        ])
    ]
})
export class AuthSectionModule {

}
