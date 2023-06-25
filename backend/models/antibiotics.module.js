import pool from "../db.js"

class AntibioticsModule{
    static async getAllAntibiotics() {
        try {
            const { rows } = await pool.query("SELECT * FROM antibiotiki");
            return rows;
        } catch (error) {
            console.error(error);
        }
    }
    static async createAntibiotic(name) {
        try{
            const query = {
                text: 'INSERT INTO antibiotiki(label) VALUES($1)',
                values: [name]
            };
            await pool.query(query);
            return { success: true, message: `Антибиотик ${name} успешно добавлен в базу данных` };
        } catch (error){
            return { success: false, message: error };
        }
    }
    static async deleteAntibiotic(id) {
        try{
            const query = {
                text: 'DELETE FROM antibiotiki WHERE id = $1',
                values: [id]
            };
            await pool.query(query);
            return { success: true, message: `Антибиотик с ID ${id} успешно удален из базы данных` };
        } catch (error){
            return { success: false, message: error.message };
        }
    }
}

export default AntibioticsModule;