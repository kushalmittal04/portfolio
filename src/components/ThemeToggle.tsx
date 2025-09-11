
"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faAdjust } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import { Skeleton } from "./ui/skeleton";

export function ThemeToggle() {
  const [isMounted, setIsMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (isMounted) {
        document.body.classList.remove('dark', 'gray-theme');
        if (theme === 'dark') {
        document.body.classList.add('dark');
        } else if (theme === 'gray') {
            document.body.classList.add('gray-theme');
        }
    }
  }, [theme, isMounted]);

  const rotateTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("gray");
    } else {
      setTheme("light");
    }
  };

  if (!isMounted) {
    return <Skeleton className="h-10 w-10 rounded-full" />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={rotateTheme}
      className="transition-all duration-200"
      aria-label="Toggle theme"
    >
      <FontAwesomeIcon icon={faSun} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0 gray:scale-0" />
      <FontAwesomeIcon icon={faMoon} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 gray:scale-0" />
      <FontAwesomeIcon icon={faAdjust} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all gray:rotate-0 gray:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
