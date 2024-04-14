/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2024-04-04 21:51:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-14 16:02:10
 */
import React from "react";
import { hasOwnProperty } from "./utils";

export function createElement(...args) {
  const { type, props } = args;
  if (props == null || !hasOwnProperty.call(props, "r-if")) {
    return React.createElement.apply(undefined, args);
  }
  return props["r-if"] ? React.createElement.apply(undefined, args) : "";
}

export const { Fragment } = React;
