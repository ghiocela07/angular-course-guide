import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './auth-guard.service';
import { BasicsSectionComponent } from './basics-section/basics-section.component';
import { CompDatabDeepDiveSectionComponent } from './comp-datab-deep-dive-section/comp-datab-deep-dive-section.component';
import { DirectivesDeepDiveSectionComponent } from './directives-deep-dive-section/directives-deep-dive-section.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RoutingHomeComponent } from './routing-section/routing-home/routing-home.component';
import { RoutingSectionComponent } from './routing-section/routing-section.component';
import { CanDeactivateGuard } from './routing-section/routing-servers/routing-edit-server/can-deactivate-guard.service';
import { RoutingEditServerComponent } from './routing-section/routing-servers/routing-edit-server/routing-edit-server.component';
import { RoutingServerComponent } from './routing-section/routing-servers/routing-server/routing-server.component';
import { RoutingServerResolver } from './routing-section/routing-servers/routing-server/server-resolver.service';
import { RoutingServersComponent } from './routing-section/routing-servers/routing-servers.component';
import { RoutingUser } from './routing-section/routing-users/routing-user.model';
import { RoutingUserComponent } from './routing-section/routing-users/routing-user/routing-user.component';
import { RoutingUsersComponent } from './routing-section/routing-users/routing-users.component';
import { ServicesDependencyInjectionSectionComponent } from './services-dependency-injection-section/services-dependency-injection-section.component';
import { ErrorComponent } from './shared/error/error.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'basics', component: BasicsSectionComponent },
    { path: 'comp-datab-deep-dive', component: CompDatabDeepDiveSectionComponent },
    { path: 'directives-deep-dive', component: DirectivesDeepDiveSectionComponent },
    { path: 'services-dependency-injection', component: ServicesDependencyInjectionSectionComponent },
    {
        path: 'routing', component: RoutingSectionComponent,
        children: [
            { path: '', component: RoutingHomeComponent },
            { path: 'home', component: RoutingHomeComponent },
            {
                path: 'users', component: RoutingUsersComponent,
                children: [
                    { path: ':id/:name', component: RoutingUserComponent },
                ]
            },
            {
                path: 'servers',
                // canActivate: [AuthGuard],
                canActivateChild: [AuthGuard],
                component: RoutingServersComponent,
                children: [
                    { path: ':id/edit', component: RoutingEditServerComponent, canDeactivate: [CanDeactivateGuard] },
                    { path: ':id', component: RoutingServerComponent, resolve: {server: RoutingServerResolver} },
                ]
            },

        ]
    },
     { path: 'not-found', component: PageNotFoundComponent },
     // { path: 'not-found', component: ErrorComponent, data: {message: 'Page not found!'} },
    { path: '', component: MainPageComponent, pathMatch: 'full' },
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