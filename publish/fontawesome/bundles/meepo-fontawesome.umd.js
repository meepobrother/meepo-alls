(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('font-awesome/css/font-awesome.min.css')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'font-awesome/css/font-awesome.min.css'], factory) :
	(factory((global['meepo-fontawesome'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */










function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

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
        (_a = this.el.classList).add.apply(_a, __spread(this.iconClass()));
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
    { type: core.Directive, args: [{
                selector: '[fa]'
            },] },
];
/** @nocollapse */
FontAwesomeDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
FontAwesomeDirective.propDecorators = {
    "icon": [{ type: core.Input },],
    "size": [{ type: core.Input },],
    "fw": [{ type: core.Input },],
    "spin": [{ type: core.Input },],
    "pulse": [{ type: core.Input },],
    "rotate": [{ type: core.Input },],
    "flip": [{ type: core.Input },],
    "extra": [{ type: core.Input },],
};
var FontAwesomeModule = /** @class */ (function () {
    function FontAwesomeModule() {
    }
    return FontAwesomeModule;
}());
FontAwesomeModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [FontAwesomeDirective],
                exports: [FontAwesomeDirective]
            },] },
];
/** @nocollapse */
FontAwesomeModule.ctorParameters = function () { return []; };

exports.FontAwesomeDirective = FontAwesomeDirective;
exports.FontAwesomeModule = FontAwesomeModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=meepo-fontawesome.umd.js.map
