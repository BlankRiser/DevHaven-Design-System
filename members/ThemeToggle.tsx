import { useTheme } from "next-themes";
import { useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Theme"
      type="button"
      className="bg-gray-200 hover:bg-gray-300 text-gray-800  py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
        )
      }
    >
      Toggle Theme
    </button>
  );
}
