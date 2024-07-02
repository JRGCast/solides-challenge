import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-common-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './common-header.component.html',
  styleUrl: './common-header.component.scss'
})
export class CommonHeaderComponent {
  @Input() headerConfig!: { title: string; subtitle: string }
  readonly arrowIconSrc = "assets/icons/circle-arrow-left.svg";
}
