import { ColorProps, SpaceProps, ThemeUICSSProperties, TextStyleProp } from '../../css/types';

type BoxCSSProps<S, C, T> = ThemeUICSSProperties & SpaceProps<S> & ColorProps<C> & TextStyleProp<T>;

export interface PseudoProps<S, C, T> {
  _after?: BoxCSSProps<S, C, T>;
  _before?: BoxCSSProps<S, C, T>;
  _focus?: BoxCSSProps<S, C, T>;
  _hover?: BoxCSSProps<S, C, T>;
  _active?: BoxCSSProps<S, C, T>;
  _pressed?: BoxCSSProps<S, C, T>;
  _selected?: BoxCSSProps<S, C, T>;
  _focusWithin?: BoxCSSProps<S, C, T>;
  _invalid?: BoxCSSProps<S, C, T>;
  _disabled?: BoxCSSProps<S, C, T>;
  _grabbed?: BoxCSSProps<S, C, T>;
  _expanded?: BoxCSSProps<S, C, T>;
  _checked?: BoxCSSProps<S, C, T>;
  _mixed?: BoxCSSProps<S, C, T>;
  _odd?: BoxCSSProps<S, C, T>;
  _even?: BoxCSSProps<S, C, T>;
  _visited?: BoxCSSProps<S, C, T>;
  _readOnly?: BoxCSSProps<S, C, T>;
  _first?: BoxCSSProps<S, C, T>;
  _last?: BoxCSSProps<S, C, T>;
  _notFirst?: BoxCSSProps<S, C, T>;
  _notLast?: BoxCSSProps<S, C, T>;
  _placeholder?: BoxCSSProps<S, C, T>;
}

export interface SxProp<S, C, T> {
  sx?: BoxCSSProps<S, C, T>;
  css?: BoxCSSProps<S, C, T>;
}

export type BoxProps<S, C, T> = PseudoProps<S, C, T> & BoxCSSProps<S, C, T> & SxProp<S, C, T>;
