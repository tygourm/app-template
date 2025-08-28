import { useEffect, useState } from "react";

import { useTheme } from "@/components/providers/theme";

export function useResolvedTheme(): "dark" | "light" {
  const { theme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    if (theme === "system") {
      const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

      const updateTheme = () =>
        setResolvedTheme(matchMedia.matches ? "dark" : "light");

      updateTheme(); // set initially
      matchMedia.addEventListener("change", updateTheme);

      return () => matchMedia.removeEventListener("change", updateTheme);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme]);

  return resolvedTheme;
}
