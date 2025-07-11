import { Component } from '@angular/core';
import {AuthHeaderComponent} from '../header/auth-header.component';
import {LoginComponent} from '../../../../modules/login/login.component';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [AuthHeaderComponent,LoginComponent,CommonModule,RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
  standalone: true
})
export class AuthLayoutComponent {
  authIntroImg:string = 'assets/photo/travel_photo.png';
  constructor() {
  }

}
