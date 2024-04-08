/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2024-04-02 23:31:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-09 00:24:26
 */
import 'react';
import { HTMLAttributes as  ReactHTMLAttributes} from "react";


  type WithCustomizedProp<P> = P & { ['rIf']?: boolean }

// unpack all here to avoid infinite self-referencing when defining our own JSX namespace
type ReactJSXElement = JSX.Element;
type ReactJSXElementClass = JSX.ElementClass;
type ReactJSXElementAttributesProperty = JSX.ElementAttributesProperty  & {'rIf'?: boolean};;
type ReactJSXElementChildrenAttribute = JSX.ElementChildrenAttribute;
type ReactJSXLibraryManagedAttributes<C, P> = JSX.LibraryManagedAttributes<
  C,
  P
>;
type ReactJSXIntrinsicAttributes = JSX.IntrinsicAttributes & {'rIf'?: boolean};
type ReactJSXIntrinsicClassAttributes<T> = JSX.IntrinsicClassAttributes<T>
type ReactJSXIntrinsicElements = JSX.IntrinsicElements & {'rIf'?: boolean};

export namespace CJSX {
  interface Element extends ReactJSXElement {}
  interface ElementClass extends ReactJSXElementClass {}
  interface ElementAttributesProperty
    extends ReactJSXElementAttributesProperty {}
  interface ElementChildrenAttribute extends ReactJSXElementChildrenAttribute {}

  type LibraryManagedAttributes<C, P> = WithCustomizedProp<P> &
    ReactJSXLibraryManagedAttributes<C, P>;

  interface IntrinsicAttributes extends ReactJSXIntrinsicAttributes {}
  interface IntrinsicClassAttributes<T>
    extends ReactJSXIntrinsicClassAttributes<T> {}
  type IntrinsicElements = {
    [K in keyof ReactJSXIntrinsicElements]: Omit<
      ReactJSXIntrinsicElements[K],
      'rIf'
    > & {
      ['rIf']?: boolean;
    };
  };
}

interface CHTMLAttributes<T> extends ReactHTMLAttributes<T> {['rIf']?: boolean;}

export namespace CReact {
  interface HTMLAttributes <T> extends CHTMLAttributes {}
}