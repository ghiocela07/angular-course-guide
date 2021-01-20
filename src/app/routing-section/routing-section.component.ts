import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-section',
  templateUrl: './routing-section.component.html',
  styleUrls: ['./routing-section.component.css', '../app.component.css']
})
export class RoutingSectionComponent implements OnInit {

  public activeLink = '';

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public navigateBackToMain(): void {
	  this.router.navigateByUrl('');
  }

}
