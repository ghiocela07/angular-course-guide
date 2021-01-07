import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appSections } from '../sections';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  appSections =  appSections;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }

}
