import { ElementRef } from '@angular/core';
import 'font-awesome/css/font-awesome.min.css';
export declare class FontAwesomeDirective {
    el: HTMLElement;
    icon: string;
    size: string;
    fw: string;
    spin: string;
    pulse: string;
    rotate: string;
    flip: string;
    extra: string;
    constructor(elementRef: ElementRef);
    ngOnChanges(): void;
    iconClass(): string[];
}
export declare class FontAwesomeModule {
}
