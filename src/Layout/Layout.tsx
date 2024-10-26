import { AppSidebar } from "@/components/sidebar/AppSideBar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-0">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
