import camelCase from 'camelcase';
import { properties } from '../common/css-properties';
import { aliases, multiples, css } from '../css';
import { useTheme } from './use-theme';

export const config: any = {
  roundedTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
  },
  roundedBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  roundedLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
  },
  roundedRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  roundedTopRight: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  roundedTopLeft: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  roundedBottomRight: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  roundedBottomLeft: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  rounded: {
    property: 'borderRadius',
    scale: 'radii',
  },
  d: {
    property: 'display',
  },
  w: {
    property: 'width',
    scale: 'sizes',
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes',
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  h: {
    property: 'height',
    scale: 'sizes',
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  bgImg: {
    property: 'backgroundImage',
  },
  bgSize: {
    property: 'backgroundSize',
  },
  bgPos: {
    property: 'backgroundPosition',
  },
  bgRepeat: {
    property: 'backgroundRepeat',
  },
  pos: {
    property: 'position',
  },
  flexDir: {
    property: 'flexDirection',
  },
  shadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
  textDecoration: true,
  overflowX: true,
  overflowY: true,
  textTransform: true,
  animation: true,
  appearance: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  transition: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  stroke: {
    property: 'stroke',
    scale: 'colors',
  },
  objectFit: true,
  objectPosition: true,
  backgroundAttachment: true,
  outline: true,
};

config['bgAttachment'] = config.backgroundAttachment;
config['textDecor'] = config.textDecoration;
config['listStylePos'] = config.listStylePosition;
config['listStyleImg'] = config.listStyleImage;

// Transform the custom alias to a format that styled-system CSS supports
const transformAlias = (prop: string, propValue: any) => {
  const configKeys = Object.keys(config);
  const result: Record<string, any> = {};

  if (configKeys.includes(prop)) {
    const { properties, property } = config[prop] as any;
    if (properties) {
      properties.forEach((_cssProp: string) => (result[_cssProp] = propValue));
    }
    if (property) {
      result[property] = propValue;
    }
    if (config[prop] === true) {
      result[prop] = propValue;
    }
  } else {
    result[prop] = propValue;
  }
  return result;
};

export const tx = (props: any) => {
  let result = {};
  for (const prop in props) {
    if (typeof props[prop] === 'object' && !Array.isArray(props[prop])) {
      result = { ...result, [prop]: tx(props[prop]) };
    } else {
      result = { ...result, ...transformAlias(prop, props[prop]) };
    }
  }
  const noStyles = Object.keys(result).length === 0 && result.constructor === Object;

  return noStyles ? undefined : result;
};
/**
 * The selectors are based on [WAI-ARIA state properties](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) and common CSS Selectors
 */
const hover = '&:hover';
const active = '&:active, &[data-active=true]';
const focus = '&:focus';
const visited = '&:visited';
const even = '&:nth-of-type(even)';
const odd = '&:nth-of-type(odd)';
const disabled =
  '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover';
const checked = '&[aria-checked=true]';
const mixed = '&[aria-checked=mixed]';
const selected = '&[aria-selected=true]';
const invalid = '&[aria-invalid=true]';
const pressed = '&[aria-pressed=true]';
const readOnly = '&[aria-readonly=true], &[readonly]';
const first = '&:first-of-type';
const last = '&:last-of-type';
const expanded = '&[aria-expanded=true]';
const grabbed = '&[aria-grabbed=true]';
const notFirst = '&:not(:first-of-type)';
const notLast = '&:not(:last-of-type)';
const groupHover = '[role=group]:hover &';

export const useCss = ({
  _after,
  _focus,
  _selected,
  _focusWithin,
  _hover,
  _invalid,
  _active,
  _disabled,
  _grabbed,
  _pressed,
  _expanded,
  _visited,
  _before,
  _readOnly,
  _first,
  _notFirst,
  _notLast,
  _last,
  _placeholder,
  _checked,
  _groupHover,
  _mixed,
  _odd,
  _even,
  ...props
}: any) => {
  const _css: Record<string, any> = {
    [hover]: tx(_hover),
    [focus]: tx(_focus),
    [active]: tx(_active),
    [visited]: tx(_visited),
    [disabled]: tx(_disabled),
    [selected]: tx(_selected),
    [invalid]: tx(_invalid),
    [expanded]: tx(_expanded),
    [grabbed]: tx(_grabbed),
    [readOnly]: tx(_readOnly),
    [first]: tx(_first),
    [notFirst]: tx(_notFirst),
    [notLast]: tx(_notLast),
    [last]: tx(_last),
    [odd]: tx(_odd),
    [even]: tx(_even),
    [mixed]: tx(_mixed),
    [checked]: tx(_checked),
    [pressed]: tx(_pressed),
    [groupHover]: tx(_groupHover),
    '&:before': tx(_before),
    '&:after': tx(_after),
    '&:focus-within': tx(_focusWithin),
    '&::placeholder': tx(_placeholder),
  };
  let rest = {
    ...props,
  };
  const theme = useTheme();

  const isCssProp = (prop: any) =>
    properties.find(cssProp => camelCase(cssProp) === prop) ||
    Object.keys(aliases).find(alias => alias === prop) ||
    Object.keys(multiples).find(alias => alias === prop);

  Object.keys(props).forEach(prop => {
    if (isCssProp(prop)) {
      _css[prop] = props[prop];
      delete rest[prop];
    }
  });

  return [css(_css)(theme), rest];
};
