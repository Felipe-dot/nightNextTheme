// layout.js

"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { setThemeMode, getThemeMode } from "@/utils/cookies";

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = getThemeMode();
    if (initialTheme) {
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
    setMounted(true); // Ensure the theme is set and then mark as mounted
  }, []);

  const handleThemeChange = (theme) => {
    setThemeMode(theme);
  };

  if (!mounted) {
    return null; // Prevent rendering until the theme is set
  }

  return (
    <html lang="en">
      <ThemeProvider
        defaultTheme="light"
        attribute="data-theme"
        onChange={handleThemeChange}
      >
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
