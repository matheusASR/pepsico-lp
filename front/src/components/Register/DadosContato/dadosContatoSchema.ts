import { z } from "zod"

export const dadosContatoSchema = z.object({
    dadosContato: z.object({
        cep: z.string().min(1, "Campo necessário"),
        endereco: z.string().min(1, "Campo necessário"),
        numero: z.string().min(1, "Campo necessário"),
        complemento: z.string().min(1, "Campo necessário"),
        bairro: z.string().min(1, "Campo necessário"),
        cidade: z.string().min(1, "Campo necessário"),
        estado: z.string().min(1, "Campo necessário"),
        telefoneContato: z.string().min(1, "Campo necessário"),
        contatoEmergencia: z.string().min(1, "Campo necessário"),
        telefoneEmergencia: z.string().min(1, "Campo necessário"),
    })
})

export type TDadosContatoValues = z.infer<typeof dadosContatoSchema>