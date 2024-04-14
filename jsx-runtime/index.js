/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2024-04-04 21:51:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-14 16:02:19
 */
import { Fragment, jsx as jsx_, jsxs as jsxs_ } from "react/jsx-runtime";
import { transformProps } from "../utils";

function jsx(type, props, key) {
  if (props == null || !hasOwnProperty.call(props, "r-if")) {
    return jsx_(type, props, key);
  }
  return props["r-if"] ? jsx_(type, props, key) : '';
}

function jsxs(type, props, key) {
  if (props == null || !hasOwnProperty.call(props, "r-if")) {
    return jsxs_(type, props, key);
  }
  return props["r-if"] ? jsxs_(type, props, key) : '';
}

export { Fragment, jsx, jsxs };
