import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-solution',
  templateUrl: './reactive-forms-solution.component.html',
  styleUrls: ['./reactive-forms-solution.component.css']
})
export class ReactiveFormsSolutionComponent implements OnInit {

  projectForm: FormGroup | undefined;
  forbiddenProjectNames = ['Test'];
  projectStatuses = ['Stable', 'Critical', 'Finished'];

  constructor() { }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit(): void {
    console.log(this.projectForm);
  }

  isError(controlName: string, type: string): boolean | undefined {
    const control = this.projectForm?.get(controlName);

    return control?.hasError(type);
  }

  initializeForm(): void {
    this.projectForm = new FormGroup({
      // projectName: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      projectName: new FormControl(null, Validators.required, this.forbiddenNamesAsync()),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(null)
    });
  }

  forbiddenNames(control: FormControl): { nameIsForbidden: boolean } | null {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }

    return null;
  }

  forbiddenNamesAsync(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise<ValidationErrors | null>(
        (resolve, reject) => {
          setTimeout(() => {
            if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
              resolve({ nameIsForbidden: true });
            } else {
              resolve(null);
            }
          }, 1500);
        });
    };
  }
}
