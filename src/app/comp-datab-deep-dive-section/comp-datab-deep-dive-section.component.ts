import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-datab-deep-dive-section',
  templateUrl: './comp-datab-deep-dive-section.component.html',
  styleUrls: ['./comp-datab-deep-dive-section.component.css', '../app.component.css']
})
export class CompDatabDeepDiveSectionComponent implements OnInit {

  serverElements = [{ type: 'server', name: 'Test Server', content: 'Just a test server' }];
  constructor() { }

  ngOnInit(): void {
  }

  onServerAdded(serverData: { serverName: string, serverContent: string }): void {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { blueprintName: string, blueprintContent: string }): void {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }


  onChangeFirst(): void {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst(): void {
    this.serverElements.splice(0, 1);
  }
}