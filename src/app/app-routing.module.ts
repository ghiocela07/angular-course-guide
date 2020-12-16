import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BasicsSectionComponent } from './basics-section/basics-section.component';
import { CompDatabDeepDiveSectionComponent } from './comp-datab-deep-dive-section/comp-datab-deep-dive-section.component';

const routes: Routes = [
    { path: 'basics', component: BasicsSectionComponent },
    { path: 'comp-datab-deep-dive', component: CompDatabDeepDiveSectionComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }