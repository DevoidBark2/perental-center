import pool from "../db.js"

class DischargedModule{
    static async getAllDischarged() {
        try {
            const { rows } = await pool.query("SELECT * FROM vipisan");
            return rows;
        } catch (error) {
            console.error(error);
        }
    }
    static async createDischarged(name) {
        try{
            const query = {
                text: 'INSERT INTO vipisan(label) VALUES($1)',
                values: [name]
            };
            await pool.query(query);
            return { success: true, message: `Антибиотик ${name} успешно добавлен в базу данных` };
        } catch (error){
            return { success: false, message: error };
        }
    }
    static async deleteDischarged(id) {
        try{
            const query = {
                text: 'DELETE FROM vipisan WHERE id = $1',
                values: [id]
            };
            await pool.query(query);
            return { success: true, message: `Антибиотик с ID ${id} успешно удален из базы данных` };
        } catch (error){
            return { success: false, message: error.message };
        }
    }
}

export default DischargedModule;