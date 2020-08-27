/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRefWithAs } from '../../common/forward-ref';
import { ForwardRefExoticComponentWithAs } from '../../common/forward-ref/types';
import { As } from '../../common/forward-ref/types';
import { useCss } from '../../hooks/use-css';

export function createComponent<BoxProps, ComponentType extends As = 'div'>(
  as = 'div'
): ForwardRefExoticComponentWithAs<ComponentType, BoxProps> {
  return forwardRefWithAs<BoxProps, ComponentType>(({ as: asProp = as, ...props }, ref) => {
    const Component = asProp;
    const [_css, rest] = useCss(props as any);
    return <Component ref={ref} css={_css} {...rest} />;
  });
}
