import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSection } from 'src/app/core/models/app-section.model';
import { AppSectionService } from '../../core/services/app-sections.service';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

  public section: AppSection | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private sectionService: AppSectionService) { }

  public ngOnInit(): void {
	let path;
	if (this.route.parent?.routeConfig?.path) {
		path = this.route.parent?.routeConfig?.path;
	} else {
		path = this.route.routeConfig?.path;
	}
	this.section = this.sectionService.getSectionByRoute(path);
  }

  public navigateBackToMain(): void {
	this.router.navigateByUrl('');
  }

}
