import { z } from "zod";

export const raffleSchema = z.object({
	name: z.string().min(10, {
		message: "El titulo debe tener minimo 10 caracteres",
	}).max(50, {
		message: "El titulo debe tener maximo 12 caracteres",
	}),
	description: z.string().min(30,{
		message: "La descripción debe tener minimo 30 caracteres",
	}).max(250, {
		message: "La descripción debe tener maximo 250 caracteres",
	}),
	prize: z.string(),
	createAt: z.date(),
	endAt: z.date(),
})