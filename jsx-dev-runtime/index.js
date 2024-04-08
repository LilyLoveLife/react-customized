/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2024-04-04 21:51:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-09 00:52:41
 */
import { Fragment, jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import { transformProps, hasOwnProperty } from "../utils";

function jsxDEV(type, props, key) {
  console.log('=====react-customized runtime dev======')
  if (props == null || !hasOwnProperty.call(props, "rIf")) {
    return _jsxDEV(type, props, key);
  }
  return props["rIf"] ? _jsxDEV(type, props, key) : '';
}

export { Fragment, jsxDEV };
