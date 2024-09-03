import { PrismaClient } from "@prisma/client";
import { Return } from "@prisma/client/runtime/library";

const prismaClientSingleton = () => {
	return new PrismaClient();
};

declare global {
	var prisma: undefined | Return<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === "production") {
// 	prisma = new PrismaClient();
// } else {
// 	if (!global.prisma) {
// 		global.prisma = new PrismaClient();
// 	}
// 	prisma = global.prisma;
// }

export default prisma;

if (process.env.NODE_ENV === "production") {
	globalThis.prisma = prisma;
}
