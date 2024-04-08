/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2024-04-04 21:51:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-09 00:52:31
 */
import { Fragment, jsx as jsx_, jsxs as jsxs_ } from "react/jsx-runtime";
import { transformProps } from "../utils";

function jsx(type, props, key) {
  console.log('=====react-customized runtime======')
  if (props == null || !hasOwnProperty.call(props, "rIf")) {
    return jsx_(type, props, key);
  }
  return props["rIf"] ? jsx_(type, props, key) : '';
}

function jsxs(type, props, key) {
  console.log('=====react-customized runtime======')
  if (props == null || !hasOwnProperty.call(props, "rIf")) {
    return jsxs_(type, props, key);
  }
  return props["rIf"] ? jsxs_(type, props, key) : '';
}

export { Fragment, jsx, jsxs };
