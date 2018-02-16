import { Component, Input, ViewChild, Renderer2, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
let QRCode = require('qrcode');
class NgxQRCodeComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
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
    ngOnChanges() {
        this.createQRCode();
    }
    /**
     * @return {?}
     */
    toDataURL() {
        return new Promise((resolve, reject) => {
            QRCode.toDataURL(this.value, { version: this.version, errorCorrectionLevel: this.errorCorrectionLevel }, function (err, url) {
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
    }
    /**
     * @param {?} canvas
     * @return {?}
     */
    toCanvas(canvas) {
        return new Promise((resolve, reject) => {
            QRCode.toCanvas(canvas, this.value, { version: this.version, errorCorrectionLevel: this.errorCorrectionLevel }, function (error) {
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
    }
    /**
     * @param {?} element
     * @return {?}
     */
    renderElement(element) {
        for (let /** @type {?} */ node of this.qrcElement.nativeElement.childNodes) {
            this.renderer.removeChild(this.qrcElement.nativeElement, node);
        }
        this.renderer.appendChild(this.qrcElement.nativeElement, element);
    }
    /**
     * @return {?}
     */
    createQRCode() {
        if (!this.value) {
            return;
        }
        
        let /** @type {?} */ element;
        //console.log("QR Encoding " + this.value);
        switch (this.elementType) {
            case 'canvas':
                element = this.renderer.createElement('canvas');
                this.toCanvas(element).then((v) => {
                    //console.log(v);
                    this.renderElement(element);
                }).catch((e) => {
                    console.error(e);
                });
                break;
            case 'url':
            case 'img':
            default:
                element = this.renderer.createElement('img');
                this.toDataURL().then((v) => {
                    //console.log(v);
                    element.setAttribute("src", v);
                    this.renderElement(element);
                }).catch((e) => {
                    console.error(e);
                });
        }
    }
}
NgxQRCodeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-qrcode',
                template: `<div #qrcElement [class]="cssClass"></div>`,
                styles: []
            },] },
];
/** @nocollapse */
NgxQRCodeComponent.ctorParameters = () => [
    { type: Renderer2, },
];
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
class QrcodeModule {
}
QrcodeModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                exports: [NgxQRCodeComponent],
                declarations: [NgxQRCodeComponent],
                providers: [],
            },] },
];
/** @nocollapse */
QrcodeModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { QrcodeModule, NgxQRCodeComponent as ɵa };
//# sourceMappingURL=meepo-qrcode.js.map
