import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-databinding',
  templateUrl: './practicing-databinding.component.html',
  styleUrls: ['./practicing-databinding.component.css', '../basics-section.component.css']
})
export class PracticingDatabindingComponent implements OnInit {

  public username = '';

  constructor() { }

  public ngOnInit(): void {
  }

  public clearUsername(): void {
	this.username = '';
  }

  public isClearButtonDisabled(): boolean {
	return this.username === '';
  }
}
