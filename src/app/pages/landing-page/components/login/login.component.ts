import { Component } from '@angular/core';
import { CommonHeaderComponent } from '../common-header/common-header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonHeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  readonly headerConfig = {
    title: 'Login',
    subtitle: 'Welcome back! Please login to continue'
  }
}
