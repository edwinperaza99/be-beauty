"use client";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
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
	Command,
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
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link href="/dashboard">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<Command className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">Natalia Salon</span>
									<span className="truncate text-xs">
										Panel de Administrador
									</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Opciones</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										{item.action ? (
											// Render button for actions like logout
											<button onClick={item.action}>
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
