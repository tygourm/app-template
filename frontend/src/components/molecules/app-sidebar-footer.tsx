import reactLogo from "/react.svg";

import dockerLogo from "/docker.svg";
import fastapiLogo from "/fastapi.svg";
import postgresLogo from "/postgres.svg";

import { SidebarFooter } from "@/components/ui/sidebar";

function AppSidebarFooter() {
  return (
    <SidebarFooter>
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} className="size-6" />
      </a>
      <a
        href="https://fastapi.tiangolo.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={fastapiLogo} className="size-6" />
      </a>
      <a
        href="https://www.postgresql.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={postgresLogo} className="size-6" />
      </a>
      <a
        href="https://www.docker.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={dockerLogo} className="size-6" />
      </a>
    </SidebarFooter>
  );
}

export { AppSidebarFooter };
