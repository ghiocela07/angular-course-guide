import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-databinding',
  templateUrl: './practicing-databinding.component.html',
  styleUrls: ['./practicing-databinding.component.css']
})
export class PracticingDatabindingComponent implements OnInit {

  public displayRequirement = false;
  username = '';
  constructor() { }

  ngOnInit(): void {
  }

  public showRequirement(show: boolean): void {
    this.displayRequirement = show;
  }

  public clearUsername(): void {
    this.username = '';
  }

  isClearButtonDisabled(): boolean{
    return this.username === '';
  }
}
