import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-solution',
  templateUrl: './reactive-forms-solution.component.html',
  styleUrls: ['./reactive-forms-solution.component.css']
})
export class ReactiveFormsSolutionComponent implements OnInit {

  projectForm: FormGroup | undefined
  forbiddenProjectNames = ['Test'];
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  constructor() { }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  isError(controlName: string, type: string) {
    const control = this.projectForm?.get(controlName);
    return control?.hasError(type);
  }

  initializeForm() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
  }

  forbiddenNames(control: FormControl): { nameIsForbidden: boolean } | null {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
    }
    return null;
  }

  //TODO: Add async validation?

}
