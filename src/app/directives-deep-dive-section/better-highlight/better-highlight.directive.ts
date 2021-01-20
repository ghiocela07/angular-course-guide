import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() public defaultColor = 'transparent';
  @Input('appBetterHighlight') public highlightColor = 'blue';
  @HostBinding('style.backgroundColor') public backgroundColor: string | undefined;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  public ngOnInit(): void {
	  this.backgroundColor = this.defaultColor;
	  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter')
  public mouseover(eventData: Event): void {
	  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  	// this.backgroundColor = 'blue';
	  this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  public mouseleave(eventData: Event): void {
	  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
	  // this.backgroundColor = 'transparent';
	  this.backgroundColor = this.defaultColor;
  }
}
