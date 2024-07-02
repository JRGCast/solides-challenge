import { Component, inject } from '@angular/core';
import { CommonHeaderComponent } from '../common-header/common-header.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/data/services/user/user.service';
import { NgTemplateOutlet } from '@angular/common';
import { CommonButtonComponent } from 'src/app/miscellaneous/common-button/common-button.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonHeaderComponent, CommonButtonComponent, ReactiveFormsModule, NgTemplateOutlet],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  private readonly fb = inject(FormBuilder);
  private readonly userService = inject(UserService);
  private readonly openEyeIconSrc = '../../../assets/icons/open-eye.svg'
  private readonly hideEyeIconSrc = '../../../assets/icons/hide-eye.svg'
  readonly headerConfig = {
    title: 'Create Account',
    subtitle: 'Enter your information below or continue with social media account'
  }

  createForm = this.fb.group({
    email: this.fb.control(null, [Validators.required, Validators.email]),
    mobile: this.fb.control(null, [Validators.required, Validators.minLength(9), Validators.pattern("^[0-9]*$")]),
    password: this.fb.control(null, [Validators.required, Validators.minLength(6)])
  })

  readonly inputsConfig = {
    email: {
      type: 'text',
      label: 'Email Address',
      placeholder: 'Your email address',
      fControlName: 'email',
      iconLeftSrc: 'assets/icons/mail.svg'
    },
    mobile: {
      type: 'text',
      label: 'Mobile Number',
      placeholder: 'Your mobile number',
      fControlName: 'mobile',
      iconLeftSrc: 'assets/icons/mobile.svg',
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

  readonly commonBtnConfig = {
    bgColor: '#BC8363',
    labelTxt: 'Create Account',
    labelColor: '#FFF'
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
