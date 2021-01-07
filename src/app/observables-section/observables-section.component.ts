import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-observables-section',
  templateUrl: './observables-section.component.html',
  styleUrls: ['./observables-section.component.css',  '../app.component.css']
})
export class ObservablesSectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateBackToMain() {
    this.router.navigateByUrl('');
  }

}
