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

  @Input('appClass') set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this._elRef.nativeElement.classList.add(key);
      } else {
        this._elRef.nativeElement.classList.remove(key);
      }
    }
  }
}
