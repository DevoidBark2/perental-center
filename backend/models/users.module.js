import pool from "../db.js";

class UsersModule{
    static async getAllUsers() {
        try {
            const { rows } = await pool.query("SELECT * FROM patients");
            return rows;
        } catch (error) {
            console.error(error);
        }
    }
    static async getUser(id) {
        try {
            const query = {
                text: 'SELECT * FROM patients WHERE id = $1',
                values: [id]
            };
            const {rows} = await pool.query(query);
            return rows;
        } catch (error) {
            console.error(error);
        }
    }
    static async createUser(data) {
        try{
            const query = {
                text: 'INSERT INTO patients(label) VALUES($1)',
                values: [name]
            };
            await pool.query(query);
            return { success: true, message: `Значение "Переведен в ОРИТН" ${name} успешно добавлен в базу данных` };
        } catch (error){
            return { success: false, message: error };
        }
    }
    static async changeUser(id) {
        try{
            const query = {
                text: 'DELETE FROM patients WHERE id = $1',
                values: [id]
            };
            await pool.query(query);
            return { success: true, message: `Значение "Переведен в ОРИТН" с ID ${id} успешно удален из базы данных` };
        } catch (error){
            return { success: false, message: error.message };
        }
    }
    static async deleteUser(id) {
        try{
            const query = {
                text: 'DELETE FROM patients WHERE id = $1',
                values: [id]
            };
            await pool.query(query);
            return { success: true, message: `Значение "Переведен в ОРИТН" с ID ${id} успешно удален из базы данных` };
        } catch (error){
            return { success: false, message: error.message };
        }
    }
}

export default UsersModule;