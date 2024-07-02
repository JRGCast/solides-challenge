import { Component, Input } from '@angular/core';
export interface IIconConfig {
  iconShort: 'circle-arrow-left' | 'mail' | 'mobile' | 'lock' | 'open-eye' | 'hide-eye'
  width: string;
  height: string;
}

@Component({
  selector: 'app-img-icon',
  standalone: true,
  imports: [],
  templateUrl: './img-icon.component.html',
  styleUrl: './img-icon.component.scss'
})
export class ImgIconComponent {
@Input() iconConfig!: IIconConfig;
imgConfigSet!: any;
}
