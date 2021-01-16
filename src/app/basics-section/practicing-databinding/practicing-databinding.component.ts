import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-databinding',
  templateUrl: './practicing-databinding.component.html',
  styleUrls: ['./practicing-databinding.component.css', '../basics-section.component.css']
})
export class PracticingDatabindingComponent implements OnInit {

  username = '';

  constructor() { }

  ngOnInit(): void {
  }

  public clearUsername(): void {
    this.username = '';
  }

  isClearButtonDisabled(): boolean {
    return this.username === '';
  }
}
