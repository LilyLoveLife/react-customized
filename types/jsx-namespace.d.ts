/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2024-04-02 23:31:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-06 23:23:22
 */
import 'react';

type WithCustomizedProp<P> = 'v-if' extends keyof P
  ? boolean extends P['v-if' & keyof P]
    ? { ['v-if']?: boolean }
    : {}
  : {};

// unpack all here to avoid infinite self-referencing when defining our own JSX namespace
type ReactJSXElement = JSX.Element;
type ReactJSXElementClass = JSX.ElementClass;
type ReactJSXElementAttributesProperty = JSX.ElementAttributesProperty;
type ReactJSXElementChildrenAttribute = JSX.ElementChildrenAttribute;
type ReactJSXLibraryManagedAttributes<C, P> = JSX.LibraryManagedAttributes<
  C,
  P
>;
type ReactJSXIntrinsicAttributes = JSX.IntrinsicAttributes;
type ReactJSXIntrinsicClassAttributes<T> = JSX.IntrinsicClassAttributes<T>;
type ReactJSXIntrinsicElements = JSX.IntrinsicElements;

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
      'v-if'
    > & {
      ['v-if']?: boolean;
    };
  };
}
