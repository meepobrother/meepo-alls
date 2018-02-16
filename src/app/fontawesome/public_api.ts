import { Directive, ElementRef, Input, NgModule } from '@angular/core';
import 'font-awesome/css/font-awesome.min.css';

@Directive({
    selector: '[fa]'
})
export class FontAwesomeDirective {
    el: HTMLElement;
    @Input() icon: string;
    @Input() size: string;
    @Input() fw: string;
    @Input() spin: string;
    @Input() pulse: string;
    @Input() rotate: string;
    @Input() flip: string;
    @Input() extra: string;

    // static get parameters() {
    //     return [[ElementRef]];
    // }

    constructor(elementRef: ElementRef) {
        this.el = elementRef.nativeElement;
    }

    ngOnChanges() {
        this.el.className = '';
        this.el.classList.add(...this.iconClass());
    }

    iconClass() {
        const classes = ['fa', `fa-${this.icon}`];
        if (this.fw) classes.push('fa-fw');
        if (this.size) classes.push(`fa-${this.size}`);
        if (this.spin) classes.push('fa-spin');
        if (this.pulse) classes.push('fa-pulse');
        if (this.rotate) classes.push(`fa-rotate-${this.rotate}`);
        if (this.flip) classes.push(`fa-flip-${this.flip}`);
        if (this.extra) classes.push(this.extra);
        return classes;
    }
}

@NgModule({
    declarations: [FontAwesomeDirective],
    exports: [FontAwesomeDirective]
})
export class FontAwesomeModule { }
