import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  numberEmitted = new EventEmitter<number>();
  interval: any;
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {}

  onStartGame(): void {
    this.interval = setInterval(() => {
      this.numberEmitted.emit(this.lastNumber + 1);
      this.lastNumber ++;
    }, 1000);
  }

  onStopGame(): void {
    clearInterval(this.interval);
  }

}
