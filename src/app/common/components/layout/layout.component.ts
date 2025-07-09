import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true
})
export class LayoutComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
