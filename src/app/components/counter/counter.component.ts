import { Component, OnInit, Input, 
         Output, EventEmitter,
         OnChanges,
         SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnChanges {

  // Input, used for property binding []

  // Input, accept input from immediate parent component

  @Input()
  counter = 0; // type inference, assume type from assignment


  @Input()
  title: string;
  
  // output variable is input name + "Change" for two way binding [()]

  @Output()
  counterChange: EventEmitter<number> = new EventEmitter();

  // Output is used for child to parent communication
  // Output is baiscally a () event binding
  // emit the event, with value as $event
  // string is value type, passed as $event
  @Output()
  resetEvent: EventEmitter<string> = new EventEmitter();



  handle: any;

  highlight: boolean = false;

  constructor() {
    console.log('Counter comp created')
   }

  ngOnInit() {
    console.log('Counter comp initialized')

    
    this.handle = setInterval(() => {
      // this.counter++; // FIXME
      this.counterChange.emit(this.counter + 1);
      console.log('incrementing counter', this.counter);

    }, 5000);

  }

  // called before destroying the component
  // clean up
  ngOnDestroy() {
    console.log('Counter comp destroy');

    clearInterval(this.handle); // stop the timer
  }

  increment(e: Event) {
    e.stopPropagation(); // stop event bubble up
    console.log('increment called', e);
    // this.counter++; // FIXME
    this.counterChange.emit(this.counter + 1);
  }

  divClick(e: any) {
    console.log('div clicked', e);
  }

  incrementBy(n: number) {
    // this.counter += n; // FIXME
    this.counterChange.emit(this.counter + n);
  }


  resetValue() {
     // FIXME, wrong approach, since counter is input value, passed from parent
     // this.counter = 0;

     // emit an event to parent component
     // "resetCounter" is passed as $event
     this.resetEvent.emit("resetCounter");
  }


  // called on initialization time
  // whenever parent property to child got changed
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes are ', changes);
  }
}
