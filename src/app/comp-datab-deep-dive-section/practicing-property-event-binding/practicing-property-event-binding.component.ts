import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-property-event-binding',
  templateUrl: './practicing-property-event-binding.component.html',
  styleUrls: ['./practicing-property-event-binding.component.css']
})
export class PracticingPropertyEventBindingComponent implements OnInit {
  public numbers: number[] = [];
  public oddNumbers: number[] = [];

  constructor() { }

  public ngOnInit(): void {
  }

  public onNumberEmitted(number: number): void {
	this.numbers.push(number);
  }

  public isEven(number: number): boolean {
	  return number % 2 === 0 ? true : false;
  }

}
