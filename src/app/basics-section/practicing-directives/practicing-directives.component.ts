import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-directives',
  templateUrl: './practicing-directives.component.html',
  styleUrls: ['./practicing-directives.component.css', '../basics-section.component.css']
})
export class PracticingDirectivesComponent implements OnInit {

  public displayRequirement = false;
  public buttonClicked = false;
  public logItems: string[] = [];

  constructor() { }

  public ngOnInit(): void {
  }

  public showRequirement(show: boolean): void {
	this.displayRequirement = show;
  }

  public onButtonClicked(): void {
	this.buttonClicked = true;
	this.logItems.push(new Date().toString());
  }

  public getColor(index: number): string {
	return index >= 4 ? 'blue' : '';
  }
}
