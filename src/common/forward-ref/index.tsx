import * as React from 'react';
import {
  ForwardRefExoticComponentWithAs,
  ForwardRefWithAsRenderFunction,
  FunctionComponentWithAs,
  MemoExoticComponentWithAs,
  As,
} from './types';

export function forwardRefWithAs<Props, ComponentType extends As = 'div'>(
  render: ForwardRefWithAsRenderFunction<ComponentType, Props>
) {
  return (React.forwardRef(render) as unknown) as ForwardRefExoticComponentWithAs<
    ComponentType,
    Props
  >;
}

export function memoWithAs<Props, ComponentType extends As = 'div'>(
  Component: FunctionComponentWithAs<ComponentType, Props>,
  propsAreEqual?: (
    prevProps: Readonly<React.PropsWithChildren<Props>>,
    nextProps: Readonly<React.PropsWithChildren<Props>>
  ) => boolean
) {
  return React.memo(Component, propsAreEqual) as MemoExoticComponentWithAs<ComponentType, Props>;
}
