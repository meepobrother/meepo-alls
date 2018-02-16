import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgModule } from '@angular/core';
import 'font-awesome/css/font-awesome.min.css';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FontAwesomeDirective = /** @class */ (function () {
    /**
     * @param {?} elementRef
     */
    function FontAwesomeDirective(elementRef) {
        this.el = elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    FontAwesomeDirective.prototype.ngOnChanges = function () {
        this.el.className = '';
        (_a = this.el.classList).add.apply(_a, tslib_1.__spread(this.iconClass()));
        var _a;
    };
    /**
     * @return {?}
     */
    FontAwesomeDirective.prototype.iconClass = function () {
        var /** @type {?} */ classes = ['fa', "fa-" + this.icon];
        if (this.fw)
            classes.push('fa-fw');
        if (this.size)
            classes.push("fa-" + this.size);
        if (this.spin)
            classes.push('fa-spin');
        if (this.pulse)
            classes.push('fa-pulse');
        if (this.rotate)
            classes.push("fa-rotate-" + this.rotate);
        if (this.flip)
            classes.push("fa-flip-" + this.flip);
        if (this.extra)
            classes.push(this.extra);
        return classes;
    };
    return FontAwesomeDirective;
}());
FontAwesomeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fa]'
            },] },
];
/** @nocollapse */
FontAwesomeDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
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
var FontAwesomeModule = /** @class */ (function () {
    function FontAwesomeModule() {
    }
    return FontAwesomeModule;
}());
FontAwesomeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FontAwesomeDirective],
                exports: [FontAwesomeDirective]
            },] },
];
/** @nocollapse */
FontAwesomeModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { FontAwesomeDirective, FontAwesomeModule };
//# sourceMappingURL=meepo-fontawesome.js.map
