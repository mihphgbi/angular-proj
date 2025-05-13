import {Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild} from "@angular/core";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {noop} from "rxjs";
import {NgClass, NgIf, NgStyle} from "@angular/common";
import {IconComponent} from '../icon/icon.component';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgClass,
    NgStyle,
    IconComponent
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    }
  ],
  standalone: true
})
export class InputFieldComponent implements ControlValueAccessor{
  onChange: (value: string) => void = noop;
  onTouch: () => void = noop;

  value: string = "";
  disabled: boolean = false;

  @ViewChild("input", {read: ElementRef}) inputElementRef !: ElementRef;

  @Input() name?: string;
  @Input() titleText?: string;
  @Input() infoText?: string;
  @Input() type: string = "text";
  @Input() width?: string = '100%';
  @Input() height?: string = '40px';
  @Input() placeholder?: string;
  @Input() isShowSuffixIcon?: boolean = false;
  @Input() isShowPrefixIcon: boolean = false;
  @Input() suffixIcon: string = 'PreviewCloseOne';
  @Input() suffixIconColor: string = 'var(--primary-600)';
  @Input() prefixIcon: string = 'PreviewCloseOne';
  @Input() prefixIconColor: string = 'var(--primary-600)';
  @Input() iconSize: string = '24';
  @Input({transform: toTailwindPaddingY}) paddingY: string = "py-3"
  @Input({transform: toTailwindPaddingX}) paddingX: string = "px-2"
  @Input() placeHolderItalic: boolean = false;
  @Input() borderColor?: string = "var(--gray-400)"
  @Input() backgroundColor?: string = 'var(--white)';
  @Input() borderRadius?: string = '2px';
  @Input() theme: Theme = "light";
  @Input() hightlightOnError?: boolean = false;
  @Input() error?: string = "";

  @Output() clear: EventEmitter<void> = new EventEmitter<void>();

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  getInputStyleByTheme(): string[] {
    if (this.theme === "light") {
      return [
        "text-gray-900",
        "placeholder:text-gray-400",
      ];
    }

    if (this.theme === "transparent") {
      return [
        "text-gray-900",
        "ring-gray-300",
        "placeholder:text-gray-400",
        "bg-none"
      ];
    }

    return [
      "text-white",
      "placeholder:text-gray-400",
    ]
  }

  getContainerStyleByTheme(): string[] {
    const disabledClass = this.disabled ? "disabled" : "";
    if (this.theme === "dark") {
      return [
        disabledClass, "default-dark",
      ]
    }

    if (this.theme === "transparent") {
      return ["transparent"];
    }

    return [disabledClass];
  }

  doFocus() {
    setTimeout(() => {
      this.inputElementRef.nativeElement.focus();
    })

  }
}

export type Theme = "light" | "dark" | "transparent";

function toTailwindPaddingX(v: string) {
  return `px-${v}`

}
function toTailwindPaddingY(v: string) {
  return `py-${v}`
}
