import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-social-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './social-toolbar.component.html',
  styleUrl: './social-toolbar.component.scss'
})
export class SocialToolbarComponent {
  socialArray = signal([
    { iconSrc: 'google', iconAlt: 'Google' },
    { iconSrc: 'facebook', iconAlt: 'Facebook' },
    { iconSrc: 'apple-black', iconAlt: 'Apple' },
    { iconSrc: 'twitter', iconAlt: 'Twitter' },
  ])
}
