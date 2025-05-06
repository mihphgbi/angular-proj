import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public static readonly loginUsername: string = "usernameRemember";

  constructor(private formBuilder: FormBuilder,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() :void {

  }

}
