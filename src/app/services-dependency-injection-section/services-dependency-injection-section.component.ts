import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesAccountsService } from '../core/services/services-accounts.service';

@Component({
  selector: 'app-services-dependency-injection-section',
  templateUrl: './services-dependency-injection-section.component.html',
  styleUrls: ['./services-dependency-injection-section.component.css'],
  // providers: [ServicesAccountsService]
})
export class ServicesDependencyInjectionSectionComponent implements OnInit {

  accounts: { name: string, status: string }[] = [];

  constructor(private accountService: ServicesAccountsService, private router: Router) { }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }


  navigateBackToMain(): void {
    this.router.navigateByUrl('');
  }
}
