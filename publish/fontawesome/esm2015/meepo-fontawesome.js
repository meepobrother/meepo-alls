import { Directive, ElementRef, Input, NgModule } from '@angular/core';
import 'font-awesome/css/font-awesome.min.css';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FontAwesomeDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.el = elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.el.className = '';
        this.el.classList.add(...this.iconClass());
    }
    /**
     * @return {?}
     */
    iconClass() {
        const /** @type {?} */ classes = ['fa', `fa-${this.icon}`];
        if (this.fw)
            classes.push('fa-fw');
        if (this.size)
            classes.push(`fa-${this.size}`);
        if (this.spin)
            classes.push('fa-spin');
        if (this.pulse)
            classes.push('fa-pulse');
        if (this.rotate)
            classes.push(`fa-rotate-${this.rotate}`);
        if (this.flip)
            classes.push(`fa-flip-${this.flip}`);
        if (this.extra)
            classes.push(this.extra);
        return classes;
    }
}
FontAwesomeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fa]'
            },] },
];
/** @nocollapse */
FontAwesomeDirective.ctorParameters = () => [
    { type: ElementRef, },
];
FontAwesomeDirective.propDecorators = {
    "icon": [{ type: Input },],
    "size": [{ type: Input },],
    "fw": [{ type: Input },],
    "spin": [{ type: Input },],
    "pulse": [{ type: Input },],
    "rotate": [{ type: Input },],
    "flip": [{ type: Input },],
    "extra": [{ type: Input },],
};
class FontAwesomeModule {
}
FontAwesomeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FontAwesomeDirective],
                exports: [FontAwesomeDirective]
            },] },
];
/** @nocollapse */
FontAwesomeModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { FontAwesomeDirective, FontAwesomeModule };
//# sourceMappingURL=meepo-fontawesome.js.map
