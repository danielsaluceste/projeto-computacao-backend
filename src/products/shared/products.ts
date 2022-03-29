import { Document } from "mongoose";

export class Product extends Document {
    nome: string;
    descricao: string;
    porte: string;
    idade: string;
    foto: string;
    city: string;
    state: string;
    
    token: string;
    user: any;
    ativo: boolean;
    dataCadastro: Date;
}
