import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-datab-deep-dive-section',
  templateUrl: './comp-datab-deep-dive-section.component.html',
  styleUrls: ['./comp-datab-deep-dive-section.component.css']
})
export class CompDatabDeepDiveSectionComponent implements OnInit {

  public serverElements = [{ type: 'server', name: 'Test Server', content: 'Just a test server' }];

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public onServerAdded(serverData: { serverName: string, serverContent: string }): void {
	this.serverElements.push({
		type: 'server',
		name: serverData.serverName,
		content: serverData.serverContent
	});
  }

  public onBlueprintAdded(blueprintData: { blueprintName: string, blueprintContent: string }): void {
	this.serverElements.push({
		type: 'blueprint',
		name: blueprintData.blueprintName,
		content: blueprintData.blueprintContent
	});
  }


  public onChangeFirst(): void {
	this.serverElements[0].name = 'Changed!';
  }

  public onDestroyFirst(): void {
	this.serverElements.splice(0, 1);
  }

  public navigateBackToMain(): void {
	this.router.navigateByUrl('');
  }
}
