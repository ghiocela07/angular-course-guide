import { Component } from '@angular/core';
import { appSections } from './core/sections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Angular - The Ultimate Guide';
  public appSections = appSections;
}
