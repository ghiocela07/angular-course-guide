import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips/chip-input';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  genders = ['male', 'female'];
  hobbies = ['painiting'];
  forbiddenUsernames = ['Chriss', 'Anna'];
  signupForm: FormGroup | undefined;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor() { }

  ngOnInit(): void {
    this.initializeForm();
    // this.signupForm?.valueChanges.subscribe(
    //   (value) => {
    //     console.log(value);
    //   }
    // );
    this.signupForm?.statusChanges.subscribe(
      (status) => {
        console.log(status);
      }
    );
  }

  onSuggestForm() {
    this.signupForm?.setValue({
      'userData': {
        'username': 'Max',
        'email': 'test1@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
  }

  onSuggestUsername() {
    this.signupForm?.patchValue({
      'userData': {
        'username': 'Max 2',
      }
    });
  }

  onResetForm() {
    //Reset each one to avoid reseting the gender
    this.signupForm?.get('userData.username')?.reset();
    this.signupForm?.get('userData.email')?.reset();
    // Reset form array
    for (let hobby of (<FormArray>this.signupForm?.get('hobbies')).value) {
      this.remove(hobby);
    }
  }

  isError(type: string) {
    const usernameControl = (<FormGroup>this.signupForm?.get('userData')).get('username');
    return usernameControl?.hasError(type);
  }

  initializeForm() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  addHobby(event: MatChipInputEvent): void {
    const input = event.input;
    const hobbyValue = event.value;

    // Add hobby
    if ((hobbyValue || '').trim()) {
      const control = new FormControl(hobbyValue, Validators.required);
      (<FormArray>this.signupForm?.get('hobbies')).push(control)
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

  }

  remove(hobby: string): void {
    const hobbieControls = <FormArray>this.signupForm?.get('hobbies');
    const index = hobbieControls.value.indexOf(hobby);

    if (index >= 0) {
      (<FormArray>this.signupForm?.get('hobbies')).removeAt(index);
    }
  }

  forbiddenNames(control: FormControl): { nameIsForbidden: boolean } | null {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
    }
    return null;
  }

  //TODO: Resolve this async validation
  // forbiddenEmails(control: AbstractControl): AsyncValidatorFn | AsyncValidatorFn[] | null | undefined {
  //   const promise = new Promise<ValidationErrors | null>(
  //     (resolve, reject) => {
  //       setTimeout(() => {
  //         if (control.value === 'test@test.com') {
  //           resolve({ 'emailIsForbidde': true });
  //         } else {
  //           resolve(null);
  //         }
  //       }, 1500);
  //     }
  //   );
  //   return <AsyncValidatorFn><unknown>promise;
  // }

}
