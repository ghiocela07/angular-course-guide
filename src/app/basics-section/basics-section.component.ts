import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basics-section',
  templateUrl: './basics-section.component.html',
  styleUrls: ['./basics-section.component.css']
})
export class BasicsSectionComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public navigateBackToMain(): void {
	this.router.navigateByUrl('');
  }
}
