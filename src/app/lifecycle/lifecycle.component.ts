import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  // constructor() → Create the component and inject dependencies.
  //constructor() is about creating the object
  constructor() {
    console.log('CONSTRUCTOR');
    console.log('input text: ', this.text);
  }

  // ngOnInit() → Initialize the component's application logic.
  // timer, fetch api

  ngOnInit() {
    console.log('ngOnInit');
    console.log('input text: ', this.text);
  }

  //   Runs once per component instance:
  // - constructor()
  // - ngOnInit()
  // - ngAfterContentInit()
  // - ngAfterViewInit()
  // - ngOnDestroy()

  //   Can run multiple times:
  // - ngOnChanges() — when bound inputs change.
  // - ngDoCheck() — during change detection.
  // - ngAfterContentChecked() — during content checking.
  // - ngAfterViewChecked() — during view checking.

  // Because your component declares @Input() text?: string, ngOnChanges() runs during initialization when Angular sets that input through a binding.
  // when bound inputs change.run
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  // during change detection, run
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  // - Content = HTML passed into the component from its parent using <ng-content>.
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  //View = HTML defined inside the component's own template.,lifecycle.component.html
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
