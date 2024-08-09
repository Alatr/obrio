"use client";

import { createContext, useContext, useEffect, useState } from "react";

export enum themeEnum {
  "light" = "light",
  "dark" = "dark",
}

const initalState: {
  theme: themeEnum;
  setTheme: (prev: themeEnum) => void;
} = {
  theme: themeEnum.light,
  setTheme: () => {},
};

const ThemeContext = createContext(initalState);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<themeEnum>(themeEnum.light);

  useEffect(() => {
    document?.documentElement?.setAttribute?.("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
