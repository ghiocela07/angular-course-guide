import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Angular - The Ultimate Guide';

  public displayPracticingComponentsAssignment = false;

  public displayPractice = false;

  public displayPracticingDataBindingAssignment = false;

  public displayPracticingDirectivesAssignment = false;

  showPracticingComponentsAssignment(show: boolean): void {
    this.displayPracticingComponentsAssignment = show;
  }

  showPractice(show: boolean): void {
    this.displayPractice = show;
  }

  showPracticingDataBindingAssignment(show: boolean): void {
    this.displayPracticingDataBindingAssignment = show;
  }

  showPracticingDirectivesAssignment(show: boolean): void {
    this.displayPracticingDirectivesAssignment = show;
  }
}
