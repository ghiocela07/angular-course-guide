import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-components',
  templateUrl: './practicing-components.component.html',
  styleUrls: ['./practicing-components.component.css']
})
export class PracticingComponentsComponent implements OnInit {

  public displayRequirement = false;
  constructor() { }

  ngOnInit(): void {
  }

  public showRequirement(show: boolean): void {
    this.displayRequirement = show;
  }

}
