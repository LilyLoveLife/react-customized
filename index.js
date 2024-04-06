/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2024-04-04 21:51:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-06 23:14:17
 */
import React from "react";
import { hasOwnProperty } from "./utils";

export function createElement(...args) {
  console.log('=====my react======')
  debugger
  const { type, props } = args;
  if (props == null || !hasOwnProperty.call(props, "v-if")) {
    return React.createElement.apply(undefined, args);
  }
  return props["v-if"] ? React.createElement.apply(undefined, args) : "";
}

export const { Fragment } = React;
