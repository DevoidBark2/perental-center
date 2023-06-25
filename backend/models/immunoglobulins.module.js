import pool from "../db.js";

class ImmunoglobulinsModule {
    static async getAllImmunoglobulins() {
        try {
            const { rows } = await pool.query("SELECT * FROM immunoglobulins");
            return rows;
        } catch (error) {
            console.error(error);
        }
    }
    static async createImmunoglobulins(name) {
        try{
            const query = {
                text: 'INSERT INTO immunoglobulins(label) VALUES($1)',
                values: [name]
            };
            await pool.query(query);
            return { success: true, message: `Иммуноглобулин ${name} успешно добавлен в базу данных` };
        } catch (error){
            return { success: false, message: error };
        }
    }
    static async deleteImmunoglobulins(id) {
        try{
            const query = {
                text: 'DELETE FROM immunoglobulins WHERE id = $1',
                values: [id]
            };
            await pool.query(query);
            return { success: true, message: `Иммуноглобулин с ID ${id} успешно удален из базы данных` };
        } catch (error){
            return { success: false, message: error.message };
        }
    }
}

export default ImmunoglobulinsModule;