
"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faAdjust } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const rotateTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("gray");
    } else {
      setTheme("light");
    }
  };
  
  React.useEffect(() => {
    document.body.classList.remove('dark', 'gray-theme');
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else if (theme === 'gray') {
        document.body.classList.add('gray-theme');
    }
  }, [theme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={rotateTheme}
      className="transition-all duration-200"
    >
      <FontAwesomeIcon icon={faSun} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0 gray:scale-0" />
      <FontAwesomeIcon icon={faMoon} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 gray:scale-0" />
      <FontAwesomeIcon icon={faAdjust} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all gray:rotate-0 gray:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
