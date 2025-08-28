import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { AppSidebar } from "@/components/organisms/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const Route = createRootRoute({
  component: () => (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-1 items-center justify-center">
          <Outlet />
        </main>
      </SidebarProvider>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
