// app/(admin)/dashboard/instructions/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function InstructionsPage() {
	const router = useRouter();

	return (
		<div className="container mx-auto mt-8 p-4">
			<h1 className="text-4xl font-bold text-center mb-6">Instrucciones</h1>
			<div className="space-y-5 text-sm">
				<section>
					<h2 className="text-2xl font-semibold">Gestión de Productos</h2>
					<p className="text-muted-foreground">
						Puedes agregar, editar, activar/desactivar o eliminar productos.
						Navega a la sección &quot;Dashboard&quot; en el menú lateral y
						utiliza las acciones disponibles en la tabla para gestionar los
						productos.
					</p>
					<p className="text-muted-foreground">
						Los tres puntos revelaran las opciones para cada producto. Los
						productos en rojo están en su estado inactivo.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold">Usuarios y Pedidos</h2>
					<p className="text-muted-foreground">
						Administra usuarios y pedidos desde las respectivas secciones del
						panel. Esto te permitirá tener un mejor control sobre el sistema.
					</p>
				</section>
				<section>
					<h2 className="text-2xl font-semibold">Soporte</h2>
					<p className="text-muted-foreground">
						Si necesitas ayuda, no dudes en contactar al equipo de soporte
						técnico utilizando la información proporcionada en la sección de
						contacto.
					</p>
				</section>
			</div>
			<Button
				onClick={() => router.push("/dashboard")}
				className="mt-6 bg-blue-600 text-white"
			>
				Regresar al Panel
			</Button>
		</div>
	);
}
