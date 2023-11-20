// src/db/User.js
const BaseModel = require('./BaseModel');

class User extends BaseModel {
    constructor() {
        super('users'); // Nome da tabela no banco de dados
    }

    // Métodos específicos para User, se necessário
}

module.exports = User;