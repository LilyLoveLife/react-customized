/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2024-04-04 21:51:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-06 23:14:43
 */
import { Fragment, jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import { transformProps, hasOwnProperty } from "../utils";

function jsxDEV(type, props, key) {
  console.log('=====my react======')
  if (props == null || !hasOwnProperty.call(props, "v-if")) {
    return _jsxDEV(type, props, key);
  }
  return props["v-if"] ? _jsxDEV(type, props, key) : '';
}

export { Fragment, jsxDEV };
