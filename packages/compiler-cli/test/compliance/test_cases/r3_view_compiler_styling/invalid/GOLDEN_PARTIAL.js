/****************************************************************************************************
 * PARTIAL FILE: individual_class_binding.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
    constructor() {
        this.isEnabled = true;
    }
}
MyComponent.ɵfac = function MyComponent_Factory(t) { return new (t || MyComponent)(); };
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: 1, type: MyComponent, selector: "ng-component", ngImport: i0, template: { source: '<div class.something="{{isEnabled}}"></div>', isInline: true } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyComponent, [{
        type: Component,
        args: [{ template: '<div class.something="{{isEnabled}}"></div>' }]
    }], null, null); })();

/****************************************************************************************************
 * PARTIAL FILE: individual_class_binding.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
    isEnabled: boolean;
    static ɵfac: i0.ɵɵFactoryDef<MyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MyComponent, "ng-component", never, {}, {}, never, never>;
}

