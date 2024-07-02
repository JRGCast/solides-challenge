import { Component, OnInit, inject } from '@angular/core';
import { CommonHeaderComponent } from '../common-header/common-header.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/data/services/user/user.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonHeaderComponent, ReactiveFormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly userService = inject(UserService);
  readonly headerConfig = {
    title: 'Login',
    subtitle: 'Welcome back! Please login to continue'
  }

  loginForm = this.fb.group({
    email: this.fb.control(null, { updateOn: 'blur', validators: [Validators.required, Validators.email] }),
    password: this.fb.control(null, { updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)] })
  })

  readonly inputsConfig = {
    email: {
      type: 'text',
      label: 'Email Address',
      placeholder: 'Your email address',
      fControlName: 'email',
      iconLeftSrc: 'assets/icons/mail.svg'
    },
    password: {
      type: 'password',
      label: 'Password',
      placeholder: 'Your password',
      fControlName: 'password',
      iconLeftSrc: 'assets/icons/mail.svg',
      iconRightSrc: 'assets/icon/open-eye.svg'
    }
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(c => {
      console.log('changes', c)
      console.log(this.loginForm.get('email'))
    })
  }
}
