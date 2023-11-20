// src/db/Document.js
const BaseModel = require('./BaseModel');

class Document extends BaseModel {
    constructor() {
        super('documents'); // Nome da tabela no banco de dados
    }

    // Métodos específicos para User, se necessário
}

module.exports = Document;