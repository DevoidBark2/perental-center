import pool from "../db.js";

class EnteredModule {
    static async getAllEntered() {
        try {
            const { rows } = await pool.query("SELECT * FROM postupil");
            return rows;
        } catch (error) {
            console.error(error);
        }
    }
    static async createEntered(name) {
        try{
            const query = {
                text: 'INSERT INTO postupil(label) VALUES($1)',
                values: [name]
            };
            await pool.query(query);
            return { success: true, message: `Значение "Поступил" ${name} успешно добавлен в базу данных` };
        } catch (error){
            return { success: false, message: error };
        }
    }
    static async deleteEntered(id) {
        try{
            const query = {
                text: 'DELETE FROM postupil WHERE id = $1',
                values: [id]
            };
            await pool.query(query);
            return { success: true, message: `Значение "Поступил" с ID ${id} успешно удален из базы данных` };
        } catch (error){
            return { success: false, message: error.message };
        }
    }
}

export default EnteredModule;