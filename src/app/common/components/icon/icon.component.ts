import {Component, Input, OnChanges} from '@angular/core';
import * as Icons from '@icon-park/svg';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  template: `<span [innerHTML]="svgHtml"></span>`,
  standalone: true
})
export class IconComponent implements OnChanges {
  @Input() name!: string;
  @Input() size: string = '16';
  @Input() fill: string = 'var(--primary-600)';
  @Input() strokeWidth: string = '3';
  svgHtml: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnChanges(): void {
    const iconFn = (Icons as any)[this.name];
    if (!iconFn) {
      console.warn(`[IconComponent] Icon "${this.name}" does not exist`);
      this.svgHtml = '';
      return;
    }

    const iconResult = iconFn({theme: 'outline', size: +this.size, fill: this.fill, strokeWidth: this.strokeWidth});

    if (typeof iconResult === 'function') {
      this.svgHtml = this.sanitizer.bypassSecurityTrustHtml(iconResult());
    } else if (typeof iconResult === 'string') {
      this.svgHtml = this.sanitizer.bypassSecurityTrustHtml(iconResult);
    }
    else if (iconResult && iconResult.toString) {
      this.svgHtml = this.sanitizer.bypassSecurityTrustHtml(iconResult.toString());
    } else {
      console.warn('[IconComponent] Can\'t render icon', iconResult);
      this.svgHtml = '';
    }
  }
}
