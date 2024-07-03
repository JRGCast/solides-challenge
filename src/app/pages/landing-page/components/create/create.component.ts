import { Component, inject } from '@angular/core';
import { CommonHeaderComponent } from '../common-header/common-header.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/data/services/user/user.service';
import { NgTemplateOutlet } from '@angular/common';
import { CommonButtonComponent } from 'src/app/miscellaneous/common-button/common-button.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonHeaderComponent, CommonButtonComponent, FooterComponent, ReactiveFormsModule],
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
    email: this.fb.control(null, { updateOn: 'change', validators: [Validators.required, Validators.email] }),
    mobile: this.fb.control(null, { updateOn: 'change', validators: [Validators.required, Validators.minLength(9), Validators.pattern("^[0-9]*$")] }),
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

  readonly createBtnConfig = {
    labelTxt: 'Create Account',
    disabled: this.createForm.invalid
  }

  readonly footerConfig = {
    topTxt: 'Or Register with Social Accounts',
    bottomTxt: 'Already have an account?',
    linkTxt: 'Login now',
    linkRoute: 'login'
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
