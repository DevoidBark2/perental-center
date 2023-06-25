import pool from "../db.js";

class AgeAtAdmissionModule {
    static async getAllAgeAdmission() {
        try {
            const { rows } = await pool.query("SELECT * FROM vosrt_pri_postup");
            return rows;
        } catch (error) {
            console.error(error);
        }
    }
    static async createAgeAdmission(name) {
        try{
            const query = {
                text: 'INSERT INTO vosrt_pri_postup(label) VALUES($1)',
                values: [name]
            };
            await pool.query(query);
            return { success: true, message: `Возраст при рождении ${name} успешно добавлен в базу данных` };
        } catch (error){
            return { success: false, message: error };
        }
    }
    static async deleteAgeAdmission(id) {
        try{
            const query = {
                text: 'DELETE FROM vosrt_pri_postup WHERE id = $1',
                values: [id]
            };
            await pool.query(query);
            return { success: true, message: `Возраст при рождении с ID ${id} успешно удален из базы данных` };
        } catch (error){
            return { success: false, message: error.message };
        }
    }
}

export default AgeAtAdmissionModule;