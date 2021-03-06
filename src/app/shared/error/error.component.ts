import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public errorMessage = '';

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
	// this.errorMessage = this.route.snapshot.data['message'];
	this.route.data.subscribe((data: Data) => {
		this.errorMessage = data.message;
	});
  }

}
