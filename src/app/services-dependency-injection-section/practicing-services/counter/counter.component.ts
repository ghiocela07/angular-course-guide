import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../../core/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public activeToInactiveCount = 0;
  public inactiveToActiveCount = 0;

  constructor(private counterService: CounterService) { }

  public ngOnInit(): void {
	this.counterService.counterChanged.subscribe(() => {
		this.activeToInactiveCount = this.counterService.activeToInactiveCounter;
		this.inactiveToActiveCount = this.counterService.inactiveToActiveCounter;
	});

  }

}
