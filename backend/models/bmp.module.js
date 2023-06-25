import pool from "../db.js"

class BmpModule{
    static async getAllBmp() {
        try {
            const { rows } = await pool.query("SELECT * FROM bmp");
            return rows;
        } catch (error) {
            console.error(error);
        }
    }
    static async createBmp(name) {
        try{
            const query = {
                text: 'INSERT INTO bmp(label) VALUES($1)',
                values: [name]
            };
            await pool.query(query);
            return { success: true, message: `ВМП ${name} успешно добавлен в базу данных` };
        } catch (error){
            return { success: false, message: error };
        }
    }
    static async deleteBmp(id) {
        try{
            const query = {
                text: 'DELETE FROM bmp WHERE id = $1',
                values: [id]
            };
            await pool.query(query);
            return { success: true, message: `Антибиотик с ID ${id} успешно удален из базы данных` };
        } catch (error){
            return { success: false, message: error.message };
        }
    }
}

export default BmpModule;