import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export default function Dashboard() {
	return (
		<>
			<main className="">
				<section className="flex flex-col items-center mt-10" id="landing">
					<details className="text-lg container">
						<summary className="text-4xl font-bold text-center">
							Panel de Administrador
						</summary>
						<p className="text-center">
							En este panel de administrador podrás gestionar los productos,
							categorías, usuarios y pedidos.
						</p>
					</details>
				</section>
				<section className="container flex justify-between">
					<ul className="flex gap-2">
						<li>
							<Button>Todo</Button>
						</li>
						<li>
							<Button>Cabello</Button>
						</li>
						<li>
							<Button>Uñas</Button>
						</li>
						<li>
							<Button>Caballero</Button>
						</li>
					</ul>
					<Sheet>
						<SheetTrigger>
							<Button>Agregar producto</Button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Agregar producto</SheetTitle>
								<SheetDescription>
									El producto sera agregado a la base de datos y luego sera
									visible en la tabla al momento de presionar el boton de
									enviar.
								</SheetDescription>
							</SheetHeader>
							<SheetFooter>
								<SheetClose>
									<Button>Enviar</Button>
								</SheetClose>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</section>
				{/* table goes here  */}
				<section></section>
			</main>
		</>
	);
}
