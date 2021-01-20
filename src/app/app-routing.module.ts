import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
	// { path: 'not-found', component: ErrorComponent, data: {message: 'Page not found!'} },
	{ path: '', component: MainPageComponent, pathMatch: 'full' },
	{
		path: 'routing', loadChildren: () =>
			import('./routing-section/routing-section.module').then(m => m.RoutingSectionModule)

	},
	{
		path: 'authentication', loadChildren: () =>
			import('./auth-section/auth-section.module').then(m => m.AuthSectionModule)

	},
	{
		path: 'basics', loadChildren: () =>
			import('./basics-section/basics-section.module').then(m => m.BasicsSectionModule)

	},
	{
		path: 'components', loadChildren: () =>
			import('./comp-datab-deep-dive-section/components-section.module').then(m => m.ComponentsSectionModule)

	},
	{
		path: 'directives', loadChildren: () =>
			import('./directives-deep-dive-section/directives-section.module').then(m => m.DirectivesSectionModule)

	},
	{
		path: 'dynamic-components', loadChildren: () =>
			import('./dynamic-components-section/dynamic-components-section.module').then(m => m.DynamicComponentsSectionModule)

	},
	{
		path: 'forms', loadChildren: () =>
			import('./forms-section/forms-section.module').then(m => m.FormsSectionModule)

	},
	{
		path: 'http-requests', loadChildren: () =>
			import('./http-section/http-section.module').then(m => m.HttpSectionModule)

	},
	{
		path: 'modules', loadChildren: () =>
			import('./modules-section/modules-section.module').then(m => m.ModulesSectionModule)

	},
	{
		path: 'observables', loadChildren: () =>
			import('./observables-section/observables-section.module').then(m => m.ObservablesSectionModule)

	},
	{
		path: 'pipes', loadChildren: () =>
			import('./pipes-section/pipes-section.module').then(m => m.PipesSectionModule)

	},
	{
		path: 'services', loadChildren: () =>
			import('./services-dependency-injection-section/services-section.module').then(m => m.ServicesSectionModule)

	},
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
