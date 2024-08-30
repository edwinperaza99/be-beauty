import AddForm from "./AddForm";
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

export default function AddProduct() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button>Agregar producto</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Agregar producto</SheetTitle>
					<SheetDescription>
						El producto sera agregado a la base de datos y luego sera visible en
						la tabla al momento de presionar el boton de enviar.
					</SheetDescription>
				</SheetHeader>
				<AddForm />
				<SheetFooter>
					<SheetClose asChild>
						<Button>Enviar</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
