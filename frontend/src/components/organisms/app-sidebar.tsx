import { AppSidebarFooter } from "@/components/molecules/app-sidebar-footer";
import { AppSidebarHeader } from "@/components/molecules/app-sidebar-header";
import { Sidebar, SidebarContent, SidebarGroup } from "@/components/ui/sidebar";

function AppSidebar() {
  return (
    <Sidebar>
      <AppSidebarHeader />
      <SidebarContent>
        <SidebarGroup />
      </SidebarContent>
      <AppSidebarFooter />
    </Sidebar>
  );
}

export { AppSidebar };
