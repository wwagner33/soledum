// src/db/Plugin.js
const BaseModel = require('./BaseModel');

class Plugin extends BaseModel {
    constructor() {
        super('plugins'); // Nome da tabela no banco de dados
    }

    // Métodos específicos para User, se necessário
}

module.exports = Plugin;