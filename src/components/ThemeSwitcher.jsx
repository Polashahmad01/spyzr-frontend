"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

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
    <div className="inline-block">
      <div className="flex flex-wrap justify-center items-center gap-3 p-1 border rounded-full">
        <button onClick={lighModeHandler} className={`rounded-full p-[2px] flex justify-center items-center h-full ${theme === "light" ? "bg-slate-300/30" : ""} sm:p-[4px]`}>
          <MdOutlineLightMode />
        </button>
        <button onClick={darkModeHandler} className={`rounded-full p-[2px] flex justify-center items-center h-full ${theme === 'dark' ? "bg-slate-300/30" : ""} sm:p-[4px]`}>
          <MdOutlineDarkMode />
        </button>
      </div>
    </div>
  )
}
