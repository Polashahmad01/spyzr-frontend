"use client";

import { ThemeProvider as Provider} from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  },[])

  if (!mounted) {
    return <>{children}</>
  }

  return <Provider attribute="class">{children}</Provider>
}
