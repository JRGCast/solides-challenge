import { Component, inject } from '@angular/core';
import { CommonHeaderComponent } from '../common-header/common-header.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/data/services/user/user.service';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonHeaderComponent, ReactiveFormsModule, NgTemplateOutlet],
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

  passwordInputType: 'text' | 'password' = 'text';
  passwordInputIcon = this.openEyeIconSrc;

  createForm = this.fb.group({
    email: this.fb.control(null, [Validators.required, Validators.email]),
    phone: this.fb.control(null, [Validators.required, Validators.minLength(9), Validators.pattern("^[0-9]*$")]),
    password: this.fb.control(null, [Validators.required, Validators.minLength(6)])
  })

  handlePasswordEyeClick(): void {
    if (this.passwordInputType === 'text') {
      this.passwordInputType = 'password'
      this.passwordInputIcon = this.hideEyeIconSrc;
    } else {
      this.passwordInputType = 'text'
      this.passwordInputIcon = this.openEyeIconSrc;
    }
  }
}
