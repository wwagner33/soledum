// src/db/BaseModel.js
// src/db/BaseModel.js
const db = require('./index');

class BaseModel {
    constructor(table) {
        if(type of table !='String'){
            throw new Error('Dados inválidos fornecidos');
        } else {
            this.table = table;
        }
 
    }

    async create(data) {
        const columns = Object.keys(data);
        const values = Object.values(data);
        const placeholders = columns.map((_, idx) => `$${idx + 1}`).join(", ");
        
        const query = `INSERT INTO ${this.table} (${columns.join(", ")}) VALUES (${placeholders}) RETURNING *`;

        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async findAll() {
        try {
            const result = await db.query(`SELECT * FROM ${this.table}`);
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    async findOne(id) {
        try {
            const result = await db.query(`SELECT * FROM ${this.table} WHERE id = $1`, [id]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        const entries = Object.entries(data);
        const setString = entries.map(([key, _], idx) => `${key} = $${idx + 1}`).join(", ");
        const query = `UPDATE ${this.table} SET ${setString} WHERE id = $${entries.length + 1} RETURNING *`;

        try {
            const values = [...entries.map(entry => entry[1]), id];
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            await db.query(`DELETE FROM ${this.table} WHERE id = $1`, [id]);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BaseModel;
