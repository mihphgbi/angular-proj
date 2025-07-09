import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LabelSize} from '../../constants/ui.constans';
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
  @Input() class: string = '';
  @Input() style: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() width?: string = '100%';
  @Input() height?: string = '48px';
  @Input() backgroundColor?: string = 'var(--primary-500)';
  @Input() outlined?: boolean = false;
  @Input() borderColor?: string = "var(--primary-500)";
  @Input() placeholder?: string;
  @Input() labelColor?: string = "";
  @Input() labelSize?: LabelSize = 'm';
  @Input() prefixIconClass?: string;
  @Input() prefixIconColorClass?: string;
  @Input() prefixIconColor?: string = 'var(--white)';
  @Input() suffixIconClass?: string;
  @Input() suffixIconColorClass?: string;
  @Input() suffixIconColor?: string = 'var(--white)';

  @Output() clicked = new EventEmitter<void>();

  ngOnChanges() {
    if (!this.labelColor) {
      this.labelColor = !this.outlined ? 'var(--white)' : 'var(--primary-500)';
    }
  }

  handleClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
