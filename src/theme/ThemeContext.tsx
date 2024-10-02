import { createContext, useContext, FC, PropsWithChildren } from 'react';
import { createTheme, Theme } from '@mui/material';
import { useColorTheme } from './use-color-theme';

interface ThemeContextType {
  mode: string;
  toggleColorMode: () => void;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleColorMode: () => {},
  theme: createTheme(),
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};