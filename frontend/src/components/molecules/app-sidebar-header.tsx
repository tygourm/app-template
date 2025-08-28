import { Link } from "@tanstack/react-router";
import { Book, Server } from "lucide-react";

import { AppLogo } from "@/components/atoms/app-logo";
import { ModeToggle } from "@/components/atoms/mode-toggle";
import { Button } from "@/components/ui/button";
import { SidebarHeader } from "@/components/ui/sidebar";

function AppSidebarHeader() {
  return (
    <SidebarHeader>
      <Link to="/">
        <Button variant="ghost" size="icon">
          <AppLogo />
        </Button>
      </Link>
      <a
        href={`${import.meta.env.VITE_BACKEND_URL}/api-docs`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="icon">
          <Server />
        </Button>
      </a>
      <a
        href={`${import.meta.env.VITE_BACKEND_URL}/app-docs`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="icon">
          <Book />
        </Button>
      </a>
      <ModeToggle />
    </SidebarHeader>
  );
}

export { AppSidebarHeader };
