/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2024-04-04 21:51:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-14 16:02:25
 */
import { Fragment, jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import { transformProps, hasOwnProperty } from "../utils";

function jsxDEV(type, props, key) {
  if (props == null || !hasOwnProperty.call(props, "r-if")) {
    return _jsxDEV(type, props, key);
  }
  return props["r-if"] ? _jsxDEV(type, props, key) : '';
}

export { Fragment, jsxDEV };
