import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    porte: String,
    idade: String,
    foto: String,
    city: String,
    state: String,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    ativo: Boolean,
    dataCadastro: Date,
});
