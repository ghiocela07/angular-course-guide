import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appSections } from '../core/sections';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public appSections = appSections;

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public navigateTo(path: string): void {
		this.router.navigateByUrl(path);
  }

}
