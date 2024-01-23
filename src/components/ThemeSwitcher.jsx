"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function lighModeHandler() {
    setTheme("light")
  }

  function darkModeHandler() {
    setTheme("dark")
  }

  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) {
    return null
  }

  return (
    <div>
      <p>The Current theme is: {theme}</p>
      <button onClick={lighModeHandler}>Light Mode</button>
      <button onClick={darkModeHandler}>Dark Mode</button>
    </div>
  )
}
