import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LabelSize} from '../../types/ui.types';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true
})
export class ButtonComponent {
  @Input() type: string = 'button';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() width?: string = '100%';
  @Input() height?: string = '48px';
  @Input() backgroundColor?: string = 'var(--primary-500)';
  @Input() placeholder?: string;
  @Input() labelColor?: string = 'var(--white)';
  @Input() labelSize?: LabelSize = 'm';
  @Input() prefixIconClass?: string;
  @Input() prefixIconColorClass?: string;
  @Input() prefixIconColor?: string = 'var(--white)';
  @Input() suffixIconClass?: string;
  @Input() suffixIconColorClass?: string;
  @Input() suffixIconColor?: string = 'var(--white)';

  @Output() clicked = new EventEmitter<void>();



  handleClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
