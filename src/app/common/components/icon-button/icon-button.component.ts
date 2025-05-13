import {Component, EventEmitter, Input, Output} from "@angular/core";
import {CommonModule, NgClass, NgStyle} from "@angular/common";
import {IconComponent} from '../icon/icon.component';

@Component({
  selector: "app-button-icon",
  templateUrl: "./icon-button.component.html",
  styleUrl: "./icon-button.component.scss",
  imports: [
    NgClass,
    NgStyle,
    CommonModule,
    IconComponent
  ],
  standalone: true
})
export class IconButtonComponent {
  @Input() text ?: string;
  @Input() size : string = '16';
  @Input() name : string = 'Help';
  @Input() iconColor : string = 'var(--primary-600)';
  @Input() disabled ?: boolean = false;
  @Input({required: false}) type: string = 'button';
  @Output() buttonClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  onClick($event: MouseEvent) {
    $event.preventDefault();
    this.buttonClick.emit($event)
  }
}
