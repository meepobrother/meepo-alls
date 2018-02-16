(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global['meepo-qrcode'] = {}),global.ng.core));
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









function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var QRCode = require('qrcode');
var NgxQRCodeComponent = /** @class */ (function () {
    /**
     * @param {?} renderer
     */
    function NgxQRCodeComponent(renderer) {
        this.renderer = renderer;
        this.elementType = 'url';
        this.cssClass = 'qrcode';
        this.value = 'https://www.techiediaries.com';
        this.version = '';
        this.errorCorrectionLevel = 'M';
    }
    /**
     * @return {?}
     */
    NgxQRCodeComponent.prototype.ngOnChanges = function () {
        this.createQRCode();
    };
    /**
     * @return {?}
     */
    NgxQRCodeComponent.prototype.toDataURL = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            QRCode.toDataURL(_this.value, { version: _this.version, errorCorrectionLevel: _this.errorCorrectionLevel }, function (err, url) {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                else {
                    //console.log(url);
                    resolve(url);
                }
            });
        });
    };
    /**
     * @param {?} canvas
     * @return {?}
     */
    NgxQRCodeComponent.prototype.toCanvas = function (canvas) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            QRCode.toCanvas(canvas, _this.value, { version: _this.version, errorCorrectionLevel: _this.errorCorrectionLevel }, function (error) {
                if (error) {
                    //console.error(error);
                    reject(error);
                }
                else {
                    //console.log('success!');
                    resolve("success");
                }
            });
        });
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NgxQRCodeComponent.prototype.renderElement = function (element) {
        try {
            for (var _a = __values(this.qrcElement.nativeElement.childNodes), _b = _a.next(); !_b.done; _b = _a.next()) {
                var node = _b.value;
                this.renderer.removeChild(this.qrcElement.nativeElement, node);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.renderer.appendChild(this.qrcElement.nativeElement, element);
        var e_1, _c;
    };
    /**
     * @return {?}
     */
    NgxQRCodeComponent.prototype.createQRCode = function () {
        var _this = this;
        if (!this.value) {
            return;
        }
        var /** @type {?} */ element;
        //console.log("QR Encoding " + this.value);
        switch (this.elementType) {
            case 'canvas':
                element = this.renderer.createElement('canvas');
                this.toCanvas(element).then(function (v) {
                    //console.log(v);
                    _this.renderElement(element);
                }).catch(function (e) {
                    console.error(e);
                });
                break;
            case 'url':
            case 'img':
            default:
                element = this.renderer.createElement('img');
                this.toDataURL().then(function (v) {
                    //console.log(v);
                    element.setAttribute("src", v);
                    _this.renderElement(element);
                }).catch(function (e) {
                    console.error(e);
                });
        }
    };
    return NgxQRCodeComponent;
}());
NgxQRCodeComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-qrcode',
                template: "<div #qrcElement [class]=\"cssClass\"></div>",
                styles: []
            },] },
];
/** @nocollapse */
NgxQRCodeComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
]; };
NgxQRCodeComponent.propDecorators = {
    "elementType": [{ type: core.Input, args: ['qrc-element-type',] },],
    "cssClass": [{ type: core.Input, args: ['qrc-class',] },],
    "value": [{ type: core.Input, args: ['qrc-value',] },],
    "version": [{ type: core.Input, args: ['qrc-version',] },],
    "errorCorrectionLevel": [{ type: core.Input, args: ['qrc-errorCorrectionLevel',] },],
    "qrcElement": [{ type: core.ViewChild, args: ['qrcElement',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var QrcodeModule = /** @class */ (function () {
    function QrcodeModule() {
    }
    return QrcodeModule;
}());
QrcodeModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [],
                exports: [NgxQRCodeComponent],
                declarations: [NgxQRCodeComponent],
                providers: [],
            },] },
];
/** @nocollapse */
QrcodeModule.ctorParameters = function () { return []; };

exports.QrcodeModule = QrcodeModule;
exports.ɵa = NgxQRCodeComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=meepo-qrcode.umd.js.map
