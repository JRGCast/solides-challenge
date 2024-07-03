import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialToolbarComponent } from 'src/app/miscellaneous/social-toolbar/social-toolbar.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialToolbarComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() config!: { topTxt: string; bottomTxt: string; linkTxt: string; linkRoute: string }
}
