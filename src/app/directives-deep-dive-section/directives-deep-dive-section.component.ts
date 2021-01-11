import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directives-deep-dive-section',
  templateUrl: './directives-deep-dive-section.component.html',
  styleUrls: ['./directives-deep-dive-section.component.css']
})
export class DirectivesDeepDiveSectionComponent implements OnInit {

  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd: boolean = false;
  value = 10;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  navigateBackToMain() {
    this.router.navigateByUrl('');
  }

}
