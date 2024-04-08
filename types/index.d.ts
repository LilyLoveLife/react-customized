/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2024-04-02 23:31:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-09 01:41:05
 */
import { createElement } from 'react';
import { CJSX, CReact } from './jsx-namespace';

export const jsx: typeof createElement;
export namespace jsx {
  namespace JSX {
    interface Element extends CJSX.Element {}
    interface ElementClass extends CJSX.ElementClass {}
    interface ElementAttributesProperty
      extends CJSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends CJSX.ElementChildrenAttribute {}
    interface IntrinsicAttributes extends CJSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T>
      extends CJSX.IntrinsicClassAttributes<T> {}
    type IntrinsicElements = CJSX.IntrinsicElements;
  }
  // namespace React {
  //   interface HTMLAttributes<T> extends CReact.ReactHTMLAttributes<T> {}
  // }
}
// export namespace React {
//   interface HTMLAttributes<T> extends CReact.ReactHTMLAttributes<T> {}
// }
// export interface HTMLAttributes<T> extends CReact.ReactHTMLAttributes<T> {}

