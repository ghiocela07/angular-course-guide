import { Injectable } from '@angular/core';
import { AppSection } from './app-section.model';
import { appSections } from './sections';

@Injectable({ providedIn: 'root' })
export class AppSectionService {

    getSections(): AppSection[] {
        return appSections;
    }

    getSectionByRoute(route: string | undefined): AppSection | undefined {
        return appSections.find((s: AppSection) => s.routePath === route);
    }
}
