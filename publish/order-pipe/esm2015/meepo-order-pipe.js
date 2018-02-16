import { Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class OrderPipe {
    /**
     * Check if a value is a string
     *
     * @param {?} value
     * @return {?}
     */
    static isString(value) {
        return typeof value === 'string' || value instanceof String;
    }
    /**
     * Sorts values ignoring the case
     *
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    static caseInsensitiveSort(a, b) {
        if (OrderPipe.isString(a) && OrderPipe.isString(b)) {
            return a.localeCompare(b);
        }
        return OrderPipe.defaultCompare(a, b);
    }
    /**
     * Default compare method
     *
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    static defaultCompare(a, b) {
        if (a === b) {
            return 0;
        }
        if (a == null) {
            return 1;
        }
        if (b == null) {
            return -1;
        }
        return a > b ? 1 : -1;
    }
    /**
     * @param {?} expression
     * @return {?}
     */
    static parseExpression(expression) {
        expression = expression.replace(/\[(\w+)\]/g, '.$1');
        expression = expression.replace(/^\./, '');
        return expression.split('.');
    }
    /**
     * @param {?} object
     * @param {?} expression
     * @return {?}
     */
    static getValue(object, expression) {
        for (let /** @type {?} */ i = 0, /** @type {?} */ n = expression.length; i < n; ++i) {
            const /** @type {?} */ k = expression[i];
            if (!(k in object)) {
                return;
            }
            object = object[k];
        }
        return object;
    }
    /**
     * @param {?} object
     * @param {?} value
     * @param {?} expression
     * @return {?}
     */
    static setValue(object, value, expression) {
        let /** @type {?} */ i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    }
    /**
     * @param {?} value
     * @param {?=} expression
     * @param {?=} reverse
     * @param {?=} isCaseInsensitive
     * @param {?=} comparator
     * @return {?}
     */
    transform(value, expression, reverse, isCaseInsensitive = false, comparator) {
        if (!value) {
            return value;
        }
        if (Array.isArray(value)) {
            return this.sortArray(value, expression, reverse, isCaseInsensitive, comparator);
        }
        if (typeof value === 'object') {
            return this.transformObject(value, expression, reverse, isCaseInsensitive, comparator);
        }
        return value;
    }
    /**
     * @param {?} value
     * @param {?=} expression
     * @param {?=} reverse
     * @param {?=} isCaseInsensitive
     * @param {?=} comparator
     * @return {?}
     */
    sortArray(value, expression, reverse, isCaseInsensitive, comparator) {
        const /** @type {?} */ isDeepLink = expression && expression.indexOf('.') !== -1;
        if (isDeepLink) {
            expression = OrderPipe.parseExpression(expression);
        }
        let /** @type {?} */ compareFn;
        if (comparator && typeof comparator === 'function') {
            compareFn = comparator;
        }
        else {
            compareFn = isCaseInsensitive ? OrderPipe.caseInsensitiveSort : OrderPipe.defaultCompare;
        }
        let /** @type {?} */ array = value.sort((a, b) => {
            if (!expression) {
                return compareFn(a, b);
            }
            if (!isDeepLink) {
                if (a && b) {
                    return compareFn(a[expression], b[expression]);
                }
                return compareFn(a, b);
            }
            return compareFn(OrderPipe.getValue(a, expression), OrderPipe.getValue(b, expression));
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    }
    /**
     * @param {?} value
     * @param {?=} expression
     * @param {?=} reverse
     * @param {?=} isCaseInsensitive
     * @param {?=} comparator
     * @return {?}
     */
    transformObject(value, expression, reverse, isCaseInsensitive, comparator) {
        let /** @type {?} */ parsedExpression = OrderPipe.parseExpression(expression);
        let /** @type {?} */ lastPredicate = parsedExpression.pop();
        let /** @type {?} */ oldValue = OrderPipe.getValue(value, parsedExpression);
        if (!Array.isArray(oldValue)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = OrderPipe.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        OrderPipe.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
        return value;
    }
}
OrderPipe.decorators = [
    { type: Pipe, args: [{
                name: 'orderBy',
                pure: false
            },] },
];
/** @nocollapse */
OrderPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class OrderModule {
}
OrderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [OrderPipe],
                exports: [OrderPipe],
                providers: [OrderPipe]
            },] },
];
/** @nocollapse */
OrderModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { OrderModule, OrderPipe as ɵa };
//# sourceMappingURL=meepo-order-pipe.js.map