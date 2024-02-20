import { z } from "zod"

export const dadosPessoaisSchema = z.object({
    dadosPessoais: z.object({
        rg: z.string().min(1, "Campo necessário"),
        cpf: z.string().min(1, "Campo necessário"),
        dataNascimento: z.string().min(1, "Campo necessário"),
        genero: z.string().min(1, "Campo necessário"),
        tamanhoCamiseta: z.string().min(1, "Campo necessário"),
        restricaoAlimentar: z.string().min(1, "Campo necessário"),
        necessidade: z.string().min(1, "Campo necessário"),
    })
})

export type TDadosPessoaisValues = z.infer<typeof dadosPessoaisSchema>