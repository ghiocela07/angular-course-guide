import { AppSection } from './models/app-section.model';


export const appSections: AppSection[] = [
	new AppSection(2, 'Basics', 'The Basics', 'basics'),
	new AppSection(5, 'Components', 'Components and databinding deep dive', 'components'),
	new AppSection(7, 'Directives', 'Directives Deep Dive', 'directives'),
	new AppSection(9, 'Services', ' Using Services and Dependency Injection', 'services'),
	new AppSection(11, 'Routing', 'Changing pages with routing', 'routing'),
	new AppSection(13, 'Observables', 'Understanding Observables', 'observables'),
	new AppSection(15, 'Forms', 'Handling Forms in Angular Apps', 'forms'),
	new AppSection(17, 'Pipes', 'Using Pipes to Transform Output', 'pipes'),
	new AppSection(18, 'Http Requests', 'Making Http Requests', 'http-requests'),
	new AppSection(20, 'Authentication', 'Authentication & Route Protection in Angular', 'authentication'),
	new AppSection(21, 'Dynamic Components', 'Dynamic Components', 'dynamic-components'),
	new AppSection(22, 'Modules', 'Angular Modules & Optimizing Angular Apps', 'modules')

];
