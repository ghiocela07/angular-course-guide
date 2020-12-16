import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() 
  serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() 
  blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();
  // newServerName: string = '';
  // newServerContent = '';
  // newServerName: string = '';
  // newServerContent = '';
  @ViewChild('serverContentInput')
  serverContentInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverName: HTMLInputElement): void {
    this.serverCreated.emit({ serverName: serverName.value, serverContent: this.serverContentInput.nativeElement.value });
  }
  onAddBlueprintServer(serverName: HTMLInputElement): void {
    this.blueprintCreated.emit({ blueprintName: serverName.value, blueprintContent: this.serverContentInput.nativeElement.value });
  }
}
