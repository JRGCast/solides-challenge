import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-social-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './social-toolbar.component.html',
  styleUrl: './social-toolbar.component.scss'
})
export class SocialToolbarComponent {
  @Input() config!: { topTxt: string; bottomTxt: string; linkTxt: string; linkRoute: string }
  socialArray = signal([
    { iconSrc: 'Google', iconAlt: 'Google' },
    { iconSrc: 'Google', iconAlt: 'Google' },
    { iconSrc: 'Google', iconAlt: 'Google' },
    { iconSrc: 'Google', iconAlt: 'Google' },
    { iconSrc: 'Google', iconAlt: 'Google' },

  ])
}
