import pool from "../db.js";

class GestationPeriodModule {
    static async getAllGestation() {
        try {
            const { rows } = await pool.query("SELECT * FROM srok_gist");
            return rows;
        } catch (error) {
            console.error(error);
        }
    }
    static async createGestation(name) {
        try{
            const query = {
                text: 'INSERT INTO srok_gist(label) VALUES($1)',
                values: [name]
            };
            await pool.query(query);
            return { success: true, message: `Значение "Срок гистации" ${name} успешно добавлен в базу данных` };
        } catch (error){
            return { success: false, message: error };
        }
    }
    static async deleteGestation(id) {
        try{
            const query = {
                text: 'DELETE FROM srok_gist WHERE id = $1',
                values: [id]
            };
            await pool.query(query);
            return { success: true, message: `Значение "СРок гистации" с ID ${id} успешно удален из базы данных` };
        } catch (error){
            return { success: false, message: error.message };
        }
    }
}

export default GestationPeriodModule;