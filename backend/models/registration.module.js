import pool from "../db.js";

class RegistrationModule{
    static async getAllRegistration() {
        try {
            const { rows } = await pool.query("SELECT * FROM propiska");
            return rows;
        } catch (error) {
            console.error(error);
        }
    }
    static async createRegistration(name) {
        try{
            const query = {
                text: 'INSERT INTO propiska(label) VALUES($1)',
                values: [name]
            };
            await pool.query(query);
            return { success: true, message: `Прописка ${name} успешно добавлен в базу данных` };
        } catch (error){
            return { success: false, message: error };
        }
    }
    static async deleteRegistration(id) {
        try{
            const query = {
                text: 'DELETE FROM propiska WHERE id = $1',
                values: [id]
            };
            await pool.query(query);
            return { success: true, message: `Прописка с ID ${id} успешно удален из базы данных` };
        } catch (error){
            return { success: false, message: error.message };
        }
    }
}

export default RegistrationModule;