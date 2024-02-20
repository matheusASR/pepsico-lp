import { z } from "zod"

export const registerFormSchema = z.object({
    confirmacao: z.string().min(1, "Campo necessário"),
    dadosPepsicoSim: z.object({
        nomeCompleto: z.string().min(1, "Campo necessário"),
        gpid: z.string().min(1, "Campo necessário"),
        email: z.string().min(1, "Campo necessário").email("Forneça um e-mail válido."),
        departamento: z.string().min(1, "Campo necessário"),
        regiao: z.string().min(1, "Campo necessário"),
        nivel: z.string().min(1, "Campo necessário"),
    }),
    dadosPessoais: z.object({
        rg: z.number().min(1, "Campo necessário"),
        cpf: z.number().min(1, "Campo necessário"),
        dataNascimento: z.date(),
        genero: z.string().min(1, "Campo necessário"),
        tamanhoCamiseta: z.string().min(1, "Campo necessário"),
        restricaoAlimentar: z.string().min(1, "Campo necessário"),
        necessidade: z.string().min(1, "Campo necessário"),
    }),
    dadosContato: z.object({
        cep: z.number().min(1, "Campo necessário"),
        endereco: z.string().min(1, "Campo necessário"),
        numero: z.number().min(1, "Campo necessário"),
        complemento: z.string().min(1, "Campo necessário"),
        bairro: z.string().min(1, "Campo necessário"),
        cidade: z.string().min(1, "Campo necessário"),
        estado: z.string().min(1, "Campo necessário"),
        telefoneContato: z.number().min(1, "Campo necessário"),
        contatoEmergencia: z.string().min(1, "Campo necessário"),
        telefoneEmergencia: z.number().min(1, "Campo necessário"),
    }),
    transporte: z.object({
        necessitaTransporteAereo: z.string().min(1, "Campo necessário"),
    }),
    duvidasSugestoes: z.object({
        mensagem: z.string().min(1, "Campo necessário"),
    }),
    dadosPepsicoNao: z.object({
        nomeComplato: z.string().min(1, "Campo necessário"),
        gpid: z.string().min(1, "Campo necessário"),
        email: z.string().min(1, "Campo necessário").email("Forneça um e-mail válido."),
        departamento: z.string().min(1, "Campo necessário"),
        regiao: z.string().min(1, "Campo necessário"),
        nivel: z.string().min(1, "Campo necessário"),
    }),
    declinio: z.object({
        motivo: z.string().min(1, "Campo necessário"),
    }),
})

export type TRegisterFormValues = z.infer<typeof registerFormSchema>