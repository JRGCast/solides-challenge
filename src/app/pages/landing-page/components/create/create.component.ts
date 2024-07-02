import { Component } from '@angular/core';
import { CommonHeaderComponent } from '../common-header/common-header.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonHeaderComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  readonly headerConfig = {
    title: 'Create Account',
    subtitle: 'Enter your information below or continue with social media account'
  }
}
