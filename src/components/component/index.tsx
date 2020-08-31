/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { As, PropsWithAs } from '../..';
import { useCss } from '../../hooks/use-css';
// @ts-ignore
import { createShouldForwardProp } from '@styled-system/should-forward-prop';
import styled from '@emotion/styled';
import { allPossibleProps } from '../..';

const BaseComponent = <SystemProps, ComponentType extends As = 'div'>({
  as,
  ...props
}: PropsWithAs<SystemProps, ComponentType>) => {
  const Component = as || 'div';

  const [styles, allProps] = useCss(props);
  return <Component css={theme => css(styles(theme))} {...allProps} />;
};

const shouldForwardProp = createShouldForwardProp([...allPossibleProps]);

export const Base = styled(BaseComponent)({
  shouldForwardProp,
});
