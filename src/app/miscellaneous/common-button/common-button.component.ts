import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common-button',
  standalone: true,
  imports: [],
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.scss'
})
export class CommonButtonComponent {
  @Input() config!: { bgColor: string; labelTxt: string; labelColor: string; }
  @Output() notifyClick = new EventEmitter<void>();

  handleClick(): void {
    this.notifyClick.emit();
  }
}
