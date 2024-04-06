/* eslint-disable no-restricted-syntax */

const transformProps = (props) => {
  console.log("---props--", props);
  if (props && hasOwnProperty.call(props, "v-auth")) {
    const newProps = assign({}, props);
    // newProps.className = clsx(props.className);
    return newProps;
  }
  return props || {};
};

const { hasOwnProperty } = Object.prototype;

const { slice } = Array.prototype;

const assign = (target, source) => {
  for (const key in source) {
    if (hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
  return target;
};

export { transformProps, hasOwnProperty, slice, assign };
