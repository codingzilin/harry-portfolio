import { LuHouse, LuAtSign, LuPackage } from "react-icons/lu";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/ui/mode-toggle";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: LuHouse,
  },
  {
    title: "About Me",
    url: "/about",
    icon: LuAtSign,
  },
  {
    title: "Projects",
    url: "#",
    icon: LuPackage,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='font-mono text-lg'>
            Side Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className='flex py-9'>
              {items.map((item) => (
                <SidebarMenuItem className='font-mono' key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
