import { Directive, 
         Input, 
         Output, EventEmitter,
         HostListener, 
         ElementRef, // dom wrapper
         Renderer2, // DOM helper api
         OnInit, 
         OnDestroy
} from '@angular/core';

// attribute level

// no templates for directives
// directive are hosted on element
// <p appHighlight
// <div appHighlight
// p, div are host elements
// directive can receive events when on the host element
// must have []
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnDestroy {

  @Input()
  backgroundColor: string = 'lightgreen';

  @Output()
  highlightEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(private hostElement: ElementRef, 
             private renderer: Renderer2) {
      console.log('Directive created');
  }

  ngOnInit() {
    console.log('Directive oninit');
    // nativeElement is actual DOM object
    console.log("HOST", this.hostElement.nativeElement.tagName);
  }

  ngOnDestroy() {
    console.log('Directive onDestroy');
  }

  @HostListener('mouseenter')
  onEnter() {
    console.log('mouse enter');
    this.renderer.setStyle(this.hostElement.nativeElement, 
                            'background', 
                            this.backgroundColor);

   this.highlightEvent.emit(true);
  }

  @HostListener('mouseleave')
  onLeave() {
    console.log('mouse leave');
    this.renderer.removeStyle(this.hostElement.nativeElement, 
                              'background');

    this.highlightEvent.emit(false);
  }

}
