import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

import { ThemeMenu } from "@/components/atoms/theme-menu";

function App() {
  return (
    <div className="flex h-screen justify-center items-center gap-4">
      <img src={viteLogo} className="size-8" />
      <ThemeMenu />
      <img src={reactLogo} className="size-8" />
    </div>
  );
}

export { App };
