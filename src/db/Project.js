// src/db/Project.js
const BaseModel = require('./BaseModel');

class Project extends BaseModel {
    constructor() {
        super('projects'); // Nome da tabela no banco de dados
    }

    // Métodos específicos para User, se necessário
}

module.exports = Project;