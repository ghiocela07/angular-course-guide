import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsSectionComponent } from './basics-section/basics-section.component';
import { CompDatabDeepDiveSectionComponent } from './comp-datab-deep-dive-section/comp-datab-deep-dive-section.component';
import { DirectivesDeepDiveSectionComponent } from './directives-deep-dive-section/directives-deep-dive-section.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    // { path: 'not-found', component: ErrorComponent, data: {message: 'Page not found!'} },
    { path: '', component: MainPageComponent, pathMatch: 'full' },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            // routes, {useHash: true},
            routes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
