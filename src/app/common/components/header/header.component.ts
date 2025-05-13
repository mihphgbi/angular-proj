import {Component, OnInit} from '@angular/core';
import {IconButtonComponent} from '../icon-button/icon-button.component';

@Component({
  selector: 'app-header',
  imports: [IconButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent implements OnInit{
    authenticate: boolean = false;
    constructor() {
    }
    ngOnInit() {
    }
}
