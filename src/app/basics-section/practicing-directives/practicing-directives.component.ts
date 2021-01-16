import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-directives',
  templateUrl: './practicing-directives.component.html',
  styleUrls: ['./practicing-directives.component.css', '../basics-section.component.css']
})
export class PracticingDirectivesComponent implements OnInit {

  displayRequirement = false;
  buttonClicked = false;
  logItems: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public showRequirement(show: boolean): void {
    this.displayRequirement = show;
  }

  onButtonClicked(): void {
    this.buttonClicked = true;
    this.logItems.push(new Date().toString());
  }

  getColor(index: number): string {
    return index >= 4 ? 'blue' : '';
  }
}
