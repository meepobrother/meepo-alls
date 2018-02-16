import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, Renderer2, NgModule } from '@angular/core';
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
            for (var _a = tslib_1.__values(this.qrcElement.nativeElement.childNodes), _b = _a.next(); !_b.done; _b = _a.next()) {
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
    { type: Component, args: [{
                selector: 'ngx-qrcode',
                template: "<div #qrcElement [class]=\"cssClass\"></div>",
                styles: []
            },] },
];
/** @nocollapse */
NgxQRCodeComponent.ctorParameters = function () { return [
    { type: Renderer2, },
]; };
NgxQRCodeComponent.propDecorators = {
    "elementType": [{ type: Input, args: ['qrc-element-type',] },],
    "cssClass": [{ type: Input, args: ['qrc-class',] },],
    "value": [{ type: Input, args: ['qrc-value',] },],
    "version": [{ type: Input, args: ['qrc-version',] },],
    "errorCorrectionLevel": [{ type: Input, args: ['qrc-errorCorrectionLevel',] },],
    "qrcElement": [{ type: ViewChild, args: ['qrcElement',] },],
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
    { type: NgModule, args: [{
                imports: [],
                exports: [NgxQRCodeComponent],
                declarations: [NgxQRCodeComponent],
                providers: [],
            },] },
];
/** @nocollapse */
QrcodeModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { QrcodeModule, NgxQRCodeComponent as ɵa };
//# sourceMappingURL=meepo-qrcode.js.map
