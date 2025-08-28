import faviconDark from "/favicon-dark.svg";
import faviconLight from "/favicon-light.svg";

import { useResolvedTheme } from "@/hooks/use-resolved-theme";

type AppLogoProps = {
  size?: number;
};

function AppLogo(props: AppLogoProps) {
  const resolvedTheme = useResolvedTheme();

  return (
    <img
      src={resolvedTheme === "dark" ? faviconLight : faviconDark}
      className={`size-${props.size || 6}`}
    />
  );
}

export { AppLogo };
