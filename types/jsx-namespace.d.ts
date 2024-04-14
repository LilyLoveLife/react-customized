/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2024-04-02 23:31:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-14 15:28:03
 */
import 'react';
import { HTMLAttributes as  ReactHTMLAttributes} from "react";


  type WithCustomizedProp<P> = P & { ['r-if']?: boolean }

// unpack all here to avoid infinite self-referencing when defining our own JSX namespace
type ReactJSXElement = JSX.Element;
type ReactJSXElementClass = JSX.ElementClass;
type ReactJSXElementAttributesProperty = JSX.ElementAttributesProperty  & {'r-if'?: boolean};;
type ReactJSXElementChildrenAttribute = JSX.ElementChildrenAttribute;
type ReactJSXLibraryManagedAttributes<C, P> = JSX.LibraryManagedAttributes<
  C,
  P
>;
type ReactJSXIntrinsicAttributes = JSX.IntrinsicAttributes & {'r-if'?: boolean};
type ReactJSXIntrinsicClassAttributes<T> = JSX.IntrinsicClassAttributes<T>
type ReactJSXIntrinsicElements = JSX.IntrinsicElements & {'r-if'?: boolean};

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
      'r-if'
    > & {
      ['r-if']?: boolean;
    };
  };
}

interface CHTMLAttributes<T> extends ReactHTMLAttributes<T> {['r-if']?: boolean;}

export namespace CReact {
  interface HTMLAttributes <T> extends CHTMLAttributes {}
}