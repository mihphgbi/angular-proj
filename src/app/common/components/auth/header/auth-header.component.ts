import {Component, OnInit} from '@angular/core';
import {IconButtonComponent} from '../../icon-button/icon-button.component';

@Component({
  selector: 'app-auth-header',
  imports: [IconButtonComponent],
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.scss',
  standalone: true
})
export class AuthHeaderComponent implements OnInit{
    authenticate: boolean = false;
    constructor() {
    }
    ngOnInit() {
    }
}
