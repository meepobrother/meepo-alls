import { PipeTransform } from '@angular/core';
export declare class OrderPipe implements PipeTransform {
    /**
     * Check if a value is a string
     *
     * @param value
     */
    static isString(value: any): boolean;
    /**
     * Sorts values ignoring the case
     *
     * @param a
     * @param b
     */
    static caseInsensitiveSort(a: any, b: any): any;
    /**
     * Default compare method
     *
     * @param a
     * @param b
     */
    static defaultCompare(a: any, b: any): 0 | 1 | -1;
    static parseExpression(expression: string): string[];
    static getValue(object: any, expression: string[]): any;
    static setValue(object: any, value: any, expression: string[]): void;
    transform(value: any | any[], expression?: any, reverse?: boolean, isCaseInsensitive?: boolean, comparator?: Function): any;
    private sortArray(value, expression?, reverse?, isCaseInsensitive?, comparator?);
    private transformObject(value, expression?, reverse?, isCaseInsensitive?, comparator?);
}
