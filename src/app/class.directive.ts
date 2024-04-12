import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true,
})
export class ClassDirective {
  private _elRef: ElementRef<HTMLElement>;

  @Input() backgroundColor?: string;

  constructor(el: ElementRef) {
    this._elRef = el;

    // never do this!!
    setTimeout(() => {
      if (this.backgroundColor) {
        this._elRef.nativeElement.style.backgroundColor = this.backgroundColor;
      }
    }, 50);
  }
}
