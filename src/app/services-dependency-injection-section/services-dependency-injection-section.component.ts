import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-services-dependency-injection-section',
  templateUrl: './services-dependency-injection-section.component.html',
  styleUrls: ['./services-dependency-injection-section.component.css'],
  providers: [AccountsService]
})
export class ServicesDependencyInjectionSectionComponent implements OnInit {

  accounts: { name: string, status: string }[] = [];

  constructor(private accountService: AccountsService, private router: Router) { }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }


  navigateBackToMain(): void {
    this.router.navigateByUrl('');
  }
}
