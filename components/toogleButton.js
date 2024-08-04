// components/ToggleButton.js
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <button onClick={handleToggleTheme}>
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ToggleButton;
