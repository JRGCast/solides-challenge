import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.scss'
})
export class CommonButtonComponent {
  @Input() config!: { labelTxt: string }
  @Input() disableBtn: boolean = false;
  @Output() notifyClick = new EventEmitter<void>();

  handleClick(): void {
    this.notifyClick.emit();
  }
}
