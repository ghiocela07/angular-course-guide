import { AppSection } from "./app-section.model";

export const appSections: AppSection[] = [
    new AppSection(2, 'Basics', 'The Basics', 'basics'),
    new AppSection(5, 'Components', 'Components and databinding deep dive', 'components'),
    new AppSection(7, 'Directives', 'Directives Deep Dive', 'directives'),
    new AppSection(9, 'Services', ' Using Services and Dependency Injection', 'services'),
    new AppSection(11, 'Routing', 'Changing pages with routing', 'routing'),
    new AppSection(13, 'Observables', 'Understanding Observables', 'observables'),

]