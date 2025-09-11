"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "gray") {
      document.body.classList.add("gray-theme");
    }
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
