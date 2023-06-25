import pool from "../db.js";

class WeightAtBirthModule{
    static async getAllWeightAtBirth() {
        try {
            const { rows } = await pool.query("SELECT * FROM mass_pri_rog");
            return rows;
        } catch (error) {
            console.error(error);
        }
    }
    static async createWeightAtBirth(name) {
        try{
            const query = {
                text: 'INSERT INTO mass_pri_rog(label) VALUES($1)',
                values: [name]
            };
            await pool.query(query);
            return { success: true, message: `Значение "Масса при рождении" ${name} успешно добавлен в базу данных` };
        } catch (error){
            return { success: false, message: error };
        }
    }
    static async deleteWeightAtBirth(id) {
        try{
            const query = {
                text: 'DELETE FROM mass_pri_rog WHERE id = $1',
                values: [id]
            };
            await pool.query(query);
            return { success: true, message: `Значение "Масса при рождении" с ID ${id} успешно удален из базы данных` };
        } catch (error){
            return { success: false, message: error.message };
        }
    }
}

export default WeightAtBirthModule;