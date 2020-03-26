const connection = require('../database/connection');
const crypto = require('crypto'); //pacote que possui o método para gerar um texto aleatório

module.exports = {

    async index (request, response)  {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs)},

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; //solicita informações
        const id = crypto.randomBytes(4).toString('HEX'); //gera 4 bytes de hexadecimais

        //cadastrar ong - conexão com banco de dados
        await connection('ongs').insert({
            id,
            name,
            email,  
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
}