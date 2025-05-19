import { Component } from '@angular/core';
import {IconButtonComponent} from '../../common/components/icon-button/icon-button.component';
import {InputFieldComponent} from '../../common/components/input-field/input-field.component';
import {ButtonComponent} from '../../common/components/button/button.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [IconButtonComponent, InputFieldComponent,ButtonComponent, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  isShowPassword: boolean = false;
  constructor() {
  }
}
