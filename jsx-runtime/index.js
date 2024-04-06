/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2024-04-04 21:51:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-06 23:14:31
 */
import { Fragment, jsx as jsx_, jsxs as jsxs_ } from "react/jsx-runtime";
import { transformProps } from "../utils";

function jsx(type, props, key) {
  console.log('=====my react======')
  if (props == null || !hasOwnProperty.call(props, "v-if")) {
    return jsx_(type, props, key);
  }
  return props["v-if"] ? jsx_(type, props, key) : '';
}

function jsxs(type, props, key) {
  console.log('=====my react======')
  if (props == null || !hasOwnProperty.call(props, "v-if")) {
    return jsxs_(type, props, key);
  }
  return props["v-if"] ? jsxs_(type, props, key) : '';
}

export { Fragment, jsx, jsxs };
