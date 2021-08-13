import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @HostBinding('style.color') private color: string;

  constructor() { }

  @HostListener('window:keydown.arrowup') windowArrowUp() {
    this.color = 'var(--primary)';
  }

  @HostListener('window:keydown.arrowdown') windowArrowDown() {
    this.color = 'var(--success)';
  }

  @HostListener('window:keydown.arrowright') windowArrowRight() {
    this.color = 'var(--warning)';
  }

  @HostListener('window:keydown.arrowleft') windowArrowLeft() {
    this.color = 'var(--danger)';
  }
}
