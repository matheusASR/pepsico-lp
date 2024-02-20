import { createContext, useState } from "react";

interface DadosPepsicoSim {
  nomeCompleto: string;
  gpid: string;
  email: string;
  departamento: string;
  regiao: string;
  nivel: string;
}

interface DadosPessoais {
  rg: string;
  cpf: string;
  dataNascimento: string;
  genero: string;
  tamanhoCamiseta: string;
  restricaoAlimentar: string;
  necessidade: string;
}

interface DadosContato {
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  telefoneContato: string;
  contatoEmergencia: string;
  telefoneEmergencia: string;
}

interface Transporte {
  necessitaTransporteAereo: string;
  planoChegada: string;
}

interface FormData {
  confirmacao: string;
  dadosPepsicoSim: DadosPepsicoSim;
  dadosPepsicoNao: DadosPepsicoSim;
  dadosPessoais: DadosPessoais;
  dadosContato: DadosContato;
  transporte: Transporte;
  duvidaSugestao: string;
  motivoDeclinio: string;
}

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export const FormContext = createContext<FormContextType>({
  formData: {
    confirmacao: "",
    dadosPepsicoSim: {
      nomeCompleto: "",
      gpid: "",
      email: "",
      departamento: "",
      regiao: "",
      nivel: "",
    },
    dadosPepsicoNao: {
      nomeCompleto: "",
      gpid: "",
      email: "",
      departamento: "",
      regiao: "",
      nivel: "",
    },
    dadosPessoais: {
      rg: "",
      cpf: "",
      dataNascimento: "",
      genero: "",
      tamanhoCamiseta: "",
      restricaoAlimentar: "",
      necessidade: "",
    },
    dadosContato: {
      cep: "",
      endereco: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      telefoneContato: "",
      contatoEmergencia: "",
      telefoneEmergencia: "",
    },
    transporte: {
      necessitaTransporteAereo: "",
      planoChegada: "",
    },
    duvidaSugestao: "",
    motivoDeclinio: "",
  },
  setFormData: () => {},
});

export const FormProvider = ({ children }: any) => {
  const [formData, setFormData] = useState<FormContextType["formData"]>({
    confirmacao: "",
    dadosPepsicoSim: {
      nomeCompleto: "",
      gpid: "",
      email: "",
      departamento: "",
      regiao: "",
      nivel: "",
    },
    dadosPepsicoNao: {
      nomeCompleto: "",
      gpid: "",
      email: "",
      departamento: "",
      regiao: "",
      nivel: "",
    },
    dadosPessoais: {
      rg: "",
      cpf: "",
      dataNascimento: "",
      genero: "",
      tamanhoCamiseta: "",
      restricaoAlimentar: "",
      necessidade: "",
    },
    dadosContato: {
      cep: "",
      endereco: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      telefoneContato: "",
      contatoEmergencia: "",
      telefoneEmergencia: "",
    },
    transporte: {
      necessitaTransporteAereo: "",
      planoChegada: "",
    },
    duvidaSugestao: "",
    motivoDeclinio: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};




