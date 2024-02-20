import { z } from "zod"

export const dadosPepsicoSimSchema = z.object({
    dadosPepsicoSim: z.object({
        nomeCompleto: z.string().min(1, "Campo necessário"),
        gpid: z.string().min(1, "Campo necessário"),
        email: z.string().min(1, "Campo necessário").email("Forneça um e-mail válido."),
        departamento: z.string().min(1, "Campo necessário"),
        regiao: z.string().min(1, "Campo necessário"),
        nivel: z.string().min(1, "Campo necessário"),
    })
})

export type TDadosPepsicoSimValues = z.infer<typeof dadosPepsicoSimSchema>