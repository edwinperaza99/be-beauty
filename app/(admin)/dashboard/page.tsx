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

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableFooter,
	TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
	return (
		<>
			<main className="flex flex-col gap-4 mt-14">
				<section className="flex flex-col items-center" id="landing">
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
				<section className="container">
					<Table>
						<TableCaption>A list of your recent invoices.</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">ID</TableHead>
								<TableHead>Nombre</TableHead>
								<TableHead>Method</TableHead>
								<TableHead className="text-right">Amount</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>Paid</TableCell>
								<TableCell>Credit Card</TableCell>
								<TableCell className="text-right">$250.00</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>Paid</TableCell>
								<TableCell>Credit Card</TableCell>
								<TableCell className="text-right">$250.00</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>Paid</TableCell>
								<TableCell>Credit Card</TableCell>
								<TableCell className="text-right">$250.00</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>Paid</TableCell>
								<TableCell>Credit Card</TableCell>
								<TableCell className="text-right">$250.00</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>Paid</TableCell>
								<TableCell>Credit Card</TableCell>
								<TableCell className="text-right">$250.00</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>Paid</TableCell>
								<TableCell>Credit Card</TableCell>
								<TableCell className="text-right">$250.00</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</section>
			</main>
		</>
	);
}
