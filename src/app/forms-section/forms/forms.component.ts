import { ViewChild } from '@angular/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @ViewChild('form') singupForm: NgForm | undefined;
  defaultQuestion = 'teacher';
  submitted = false;
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  suggestUsername() {
    const suggestedName = 'Superuser';
    // First approach
    // this.singupForm?.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    // Better approach
    this.singupForm?.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: ElementRef) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    console.log(this.singupForm);
    this.user.username = this.singupForm?.value.userData.username;
    this.user.email = this.singupForm?.value.userData.email;
    this.user.secretQuestion = this.singupForm?.value.secret;
    this.user.answer = this.singupForm?.value.questionAnswer;
    this.user.gender = this.singupForm?.value.gender;

  }

  onClear() {
    this.singupForm?.reset();
    this.submitted = false;
  }

}
