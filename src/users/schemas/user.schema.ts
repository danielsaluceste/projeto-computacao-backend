import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    nome: String,
    endereco: String,
    nascimento: String,
    cep: String,
    telefone: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    senha: String,
    token: {
        type: String,
        unique: true,
    },

    ativo: Boolean,
    dataCadastro: Date,
});
