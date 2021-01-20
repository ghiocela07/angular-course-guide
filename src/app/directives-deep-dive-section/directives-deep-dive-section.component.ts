import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directives-deep-dive-section',
  templateUrl: './directives-deep-dive-section.component.html',
  styleUrls: ['./directives-deep-dive-section.component.css']
})
export class DirectivesDeepDiveSectionComponent implements OnInit {

  // numbers = [1, 2, 3, 4, 5];
  public oddNumbers = [1, 3, 5];
  public evenNumbers = [2, 4];
  public onlyOdd = false;
  public value = 10;

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }


  public navigateBackToMain(): void {
	  this.router.navigateByUrl('');
  }

}
