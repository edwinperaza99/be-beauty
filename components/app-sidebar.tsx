"use client";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
	Home,
	LayoutDashboard,
	PlusSquare,
	BookOpen,
	LogOut,
	Settings,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const items = [
	{
		title: "Home",
		url: "/",
		icon: Home,
	},
	{
		title: "Dashboard",
		url: "/dashboard",
		icon: LayoutDashboard,
	},
	{
		title: "Agregar Producto",
		url: "/dashboard/NewProduct",
		icon: PlusSquare,
	},
	{
		title: "Instrucciones",
		url: "#",
		icon: BookOpen,
	},
	{
		title: "Configuración",
		url: "#",
		icon: Settings,
	},
	{
		title: "Cerrar Sesión",
		icon: LogOut,
		action: () => signOut(), // Logout function
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Natalia Panel de Administrador</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										{item.action ? (
											// Render button for actions like logout
											<button
												onClick={item.action}
												className="flex items-center gap-2 w-full text-left"
											>
												<item.icon />
												<span>{item.title}</span>
											</button>
										) : (
											// Render link for navigation items
											<Link href={item.url}>
												<item.icon />
												<span>{item.title}</span>
											</Link>
										)}
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
