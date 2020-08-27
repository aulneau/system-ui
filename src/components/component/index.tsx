/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRefWithAs, memoWithAs } from '../../common/forward-ref';
import { As } from '../..';
import { useCss } from '../../hooks/use-css';

export const createComponent = <SystemProps, ComponentType extends As = 'div'>(as: As = 'div') => {
  return memoWithAs<SystemProps, ComponentType>(
    forwardRefWithAs<SystemProps, ComponentType>(({ as: asProp = as, ...props }, ref) => {
      const Component = asProp;
      const [_css, rest] = useCss(props as any);
      return <Component ref={ref} css={_css} {...rest} />;
    })
  );
};
