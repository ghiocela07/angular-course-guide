import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSection } from '../app-section.model';
import { AppSectionService } from '../app-sections.service';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css', '../app.component.css']
})
export class SectionHeaderComponent implements OnInit {

  section: AppSection | undefined
  constructor(private router: Router, private route: ActivatedRoute, private sectionService: AppSectionService) { }

  ngOnInit(): void {
    const path = this.route.routeConfig?.path;
    this.section = this.sectionService.getSectionByRoute(path);
  }

  navigateBackToMain() {
    this.router.navigateByUrl('');
  }

}
