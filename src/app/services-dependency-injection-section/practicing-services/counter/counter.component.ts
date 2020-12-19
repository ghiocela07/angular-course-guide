import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  activeToInactiveCount: number = 0;
  inactiveToActiveCount: number = 0;
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService.counterChanged.subscribe(() => {
      this.activeToInactiveCount = this.counterService.activeToInactiveCounter;
      this.inactiveToActiveCount = this.counterService.inactiveToActiveCounter;
    });

  }

}
