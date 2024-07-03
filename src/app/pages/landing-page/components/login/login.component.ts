import { Component, OnInit, inject } from '@angular/core';
import { CommonHeaderComponent } from '../common-header/common-header.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/data/services/user/user.service';
import { JsonPipe } from '@angular/common';
import { CommonButtonComponent } from 'src/app/miscellaneous/common-button/common-button.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonHeaderComponent, FooterComponent, CommonButtonComponent, ReactiveFormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly userService = inject(UserService);
  private readonly openEyeIconSrc = '../../../assets/icons/open-eye.svg'
  private readonly hideEyeIconSrc = '../../../assets/icons/hide-eye.svg'
  readonly headerConfig = {
    title: 'Login',
    subtitle: 'Welcome back! Please login to continue'
  }

  loginForm = this.fb.group({
    email: this.fb.control(null, { updateOn: 'change', validators: [Validators.required, Validators.email] }),
    password: this.fb.control(null, { updateOn: 'change', validators: [Validators.required, Validators.minLength(6)] })
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
      iconLeftSrc: 'assets/icons/lock.svg',
      iconRightSrc: 'assets/icons/open-eye.svg'
    }
  }

  readonly loginBtnConfig = {
    labelTxt: 'Login',
  }

  readonly forgotBtnConfig = {
    labelTxt: 'Forgot Password',
  }

  readonly footerConfig = {
    topTxt: 'Or Continue with Social Accounts',
    bottomTxt: 'Don’t have an account?',
    linkTxt: 'Create now',
    linkRoute: 'create'
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(c => {
      console.log('changes', c)
      console.log(this.loginForm.get('email'))
    })
  }

  showHidePassword(): void {
    if (this.inputsConfig.password.type === 'password') {
      this.inputsConfig.password.type = 'text';
      this.inputsConfig.password.iconRightSrc = this.hideEyeIconSrc;
    } else {
      this.inputsConfig.password.type = 'password';
      this.inputsConfig.password.iconRightSrc = this.openEyeIconSrc;
    }
  }
}
