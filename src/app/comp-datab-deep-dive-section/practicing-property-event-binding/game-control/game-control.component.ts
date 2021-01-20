import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  public numberEmitted = new EventEmitter<number>();
  public interval: any;
  public lastNumber = 0;

  constructor() { }

  public ngOnInit(): void {}

  public onStartGame(): void {
	this.interval = setInterval(() => {
		this.numberEmitted.emit(this.lastNumber + 1);
		this.lastNumber ++;
	}, 1000);
  }

  public onStopGame(): void {
	clearInterval(this.interval);
  }

}
