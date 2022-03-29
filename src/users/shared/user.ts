import { Document } from "mongoose";

export class User extends Document {
    nome: string;
    cpf: string;

    endereco: string;
    nascimento: string;
    cep: string;
    telefone: string;
    email: string;

    senha: string;
    token: string;

    ativo: boolean;
    dataCadastro: Date;
}
