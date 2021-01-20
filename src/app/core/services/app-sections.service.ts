import { Injectable } from '@angular/core';
import { AppSection } from '../models/app-section.model';
import { appSections } from '../sections';

@Injectable({ providedIn: 'root' })
export class AppSectionService {

	public getSections(): AppSection[] {
		return appSections;
	}

	public getSectionByRoute(route: string | undefined): AppSection | undefined {
		return appSections.find((s: AppSection) => s.routePath === route);
	}
}
