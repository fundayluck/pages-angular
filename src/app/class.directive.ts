import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true,
})
export class ClassDirective {
  private _elRef: ElementRef<HTMLElement>;
  constructor(el: ElementRef) {
    this._elRef = el;

    this._elRef.nativeElement.style.backgroundColor = 'orange';
  }
}
