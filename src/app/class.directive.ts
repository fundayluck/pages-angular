import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true,
})
export class ClassDirective {
  private _elRef: ElementRef<HTMLElement>;

  constructor(el: ElementRef) {
    this._elRef = el;
  }

  @Input() set backgroundColor(color: string) {
    this._elRef.nativeElement.style.backgroundColor = color;
  }
}
