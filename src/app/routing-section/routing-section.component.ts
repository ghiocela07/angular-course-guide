import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-section',
  templateUrl: './routing-section.component.html',
  styleUrls: ['./routing-section.component.css', '../app.component.css']
})
export class RoutingSectionComponent implements OnInit {

  activeLink = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateBackToMain() {
    this.router.navigateByUrl('');
  }

  onLoadingPractice(){
    this.router.navigateByUrl('routing/loading-routing');
  }

}
