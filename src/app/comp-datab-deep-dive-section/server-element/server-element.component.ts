import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent { // implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() element: { type: string; name: string; content: string; } = { type: '', name: '', content: '' };
  @Input() name: string = '';
  @ViewChild('heading') header: ElementRef | undefined;
  @ContentChild('contentDiv') content: ElementRef | undefined;

  // constructor() {
  //   console.log('constructor called!')
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges called!')
  //   console.log(changes);
  // }
  // ngOnInit(): void {
  //   console.log('ngOnInit called!')
  //   console.log(this.header?.nativeElement.textContent);
  //   console.log('Content: ' + this.content?.nativeElement.textContent);
  // }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck called!');
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit called!');
  //   console.log('Content: ' + this.content?.nativeElement.textContent);
  // }

  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked called!')
  // }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit called!');
  //   console.log(this.header?.nativeElement.textContent);
  // }

  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked called!')
  // }

  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy called!');
  // }
}