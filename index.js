/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2024-04-04 21:51:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-09 01:46:48
 */
import React from "react";
import { hasOwnProperty } from "./utils";

export function createElement(...args) {
  console.log('=====react-customized classic======')
  const { type, props } = args;
  if (props == null || !hasOwnProperty.call(props, "rIf")) {
    return React.createElement.apply(undefined, args);
  }
  return props["rIf"] ? React.createElement.apply(undefined, args) : "";
}

export const { Fragment } = React;
