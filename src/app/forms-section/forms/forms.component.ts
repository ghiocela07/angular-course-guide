import { ViewChild } from '@angular/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @ViewChild('form') public singupForm: NgForm | undefined;
  public defaultQuestion = 'teacher';
  public submitted = false;
  public answer = '';
  public genders = ['male', 'female'];
  public user = {
	username: '',
	email: '',
	secretQuestion: '',
	answer: '',
	gender: ''
  };

  constructor() { }

  public ngOnInit(): void {
  }

  public suggestUsername(): void {
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

  public onSubmit(): void {
	this.submitted = true;
	console.log(this.singupForm);
	this.user.username = this.singupForm?.value.userData.username;
	this.user.email = this.singupForm?.value.userData.email;
	this.user.secretQuestion = this.singupForm?.value.secret;
	this.user.answer = this.singupForm?.value.questionAnswer;
	this.user.gender = this.singupForm?.value.gender;

  }

  public onClear(): void {
	this.singupForm?.reset();
	this.submitted = false;
  }

}
