import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {IconButtonComponent} from '../../common/components/icon-button/icon-button.component';
import {InputFieldComponent} from '../../common/components/input-field/input-field.component';
import {ButtonComponent} from '../../common/components/button/button.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [IconButtonComponent, InputFieldComponent,ButtonComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true
})
export class LoginComponent implements OnInit {
  public static readonly loginUsername: string = "usernameRemember";

  constructor(private formBuilder: FormBuilder,
              private spinner: NgxSpinnerService) {
  }
  isShowPassword: boolean = true;

  ngOnInit() :void {

  }

}
