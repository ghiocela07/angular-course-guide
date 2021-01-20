import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output()
  public serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output()
  public blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();
  // newServerName: string = '';
  // newServerContent = '';
  // newServerName: string = '';
  // newServerContent = '';
  @ViewChild('serverContentInput')
  public serverContentInput!: ElementRef;

  constructor() { }

  public ngOnInit(): void {
  }

  public onAddServer(serverName: HTMLInputElement): void {
	this.serverCreated.emit({ serverName: serverName.value, serverContent: this.serverContentInput.nativeElement.value });
  }

  public onAddBlueprintServer(serverName: HTMLInputElement): void {
	this.blueprintCreated.emit({ blueprintName: serverName.value, blueprintContent: this.serverContentInput.nativeElement.value });
  }
}
