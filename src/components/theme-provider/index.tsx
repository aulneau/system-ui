import * as React from 'react';
import { Theme } from '../../css';

export const ThemeContext = React.createContext<Theme | undefined>(undefined);

export const ThemeProvider: React.FC<{ theme: Theme }> = ({ theme, ...rest }) => (
  <ThemeContext.Provider value={theme} {...rest} />
);
