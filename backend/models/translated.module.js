import pool from "../db.js";

class TranslatedModule {
    static async getAllTranslated() {
        try {
            const { rows } = await pool.query("SELECT * FROM perevod_oritn");
            return rows;
        } catch (error) {
            console.error(error);
        }
    }
    static async createTranslated(name) {
        try{
            const query = {
                text: 'INSERT INTO perevod_oritn(label) VALUES($1)',
                values: [name]
            };
            await pool.query(query);
            return { success: true, message: `Значение "Переведен в ОРИТН" ${name} успешно добавлен в базу данных` };
        } catch (error){
            return { success: false, message: error };
        }
    }
    static async deleteTranslated(id) {
        try{
            const query = {
                text: 'DELETE FROM perevod_oritn WHERE id = $1',
                values: [id]
            };
            await pool.query(query);
            return { success: true, message: `Значение "Переведен в ОРИТН" с ID ${id} успешно удален из базы данных` };
        } catch (error){
            return { success: false, message: error.message };
        }
    }
}

export default TranslatedModule;