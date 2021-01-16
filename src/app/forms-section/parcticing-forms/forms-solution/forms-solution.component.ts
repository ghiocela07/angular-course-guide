import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-solution',
  templateUrl: './forms-solution.component.html',
  styleUrls: ['./forms-solution.component.css']
})
export class FormsSolutionComponent implements OnInit {

  @ViewChild('form') form: NgForm | undefined;
  defaultSubscription = 'advanced';
  submitted = false;
  subscriptionAccount = {
    email: '',
    subscription: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.subscriptionAccount.email = this.form?.value.email;
    this.subscriptionAccount.subscription = this.form?.value.subscription;
    this.subscriptionAccount.password = this.form?.value.password;
    this.submitted = true;
  }

}
