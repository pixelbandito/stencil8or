/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyRow {
    /**
    * columns
    */
    'cols': string;
  }
}

declare namespace LocalJSX {
  interface MyComponent extends JSXBase.HTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface MyRow extends JSXBase.HTMLAttributes {
    /**
    * columns
    */
    'cols'?: string;
  }

  interface IntrinsicElements {
    'my-component': MyComponent;
    'my-row': MyRow;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


declare global {



  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLMyRowElement extends Components.MyRow, HTMLStencilElement {}
  var HTMLMyRowElement: {
    prototype: HTMLMyRowElement;
    new (): HTMLMyRowElement;
  };

  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'my-row': HTMLMyRowElement;
  }

  interface ElementTagNameMap extends HTMLElementTagNameMap {}
}

