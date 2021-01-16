import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-property-event-binding',
  templateUrl: './practicing-property-event-binding.component.html',
  styleUrls: ['./practicing-property-event-binding.component.css']
})
export class PracticingPropertyEventBindingComponent implements OnInit {
  numbers: number[] = [];
  oddNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onNumberEmitted(number: number): void {
    this.numbers.push(number);
  }

  isEven(number: number) {
    return number % 2 === 0 ? true : false;
  }

}
