import { Component, OnInit, inject } from '@angular/core';
import { CommonHeaderComponent } from '../common-header/common-header.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/data/services/user/user.service';
import { JsonPipe } from '@angular/common';
import { ImgIconComponent } from 'src/app/miscellaneous/img-icon/img-icon.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonHeaderComponent, ImgIconComponent, ReactiveFormsModule, JsonPipe],
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

  readonly inputsConfigs = [{
    type: 'text',
    label: 'Test',
    placeholder: '',
    fControlName: 'email',
  }]

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(c => {
      console.log('changes', c)
      console.log(this.loginForm.get('email'))
    })
  }
}
