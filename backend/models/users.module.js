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
        const { k_d, first_name, sur_name,last_name,vipisan,postupil,perevod,bsj,audioscrinning,fku,sosPriPost,perefKateter, linia,aminoven,lipofundin,
            grudVskar,smechVskar,isskusVskar,immunoglobulin,antibiotiki,bmp,propiska,vosrPriPost,massPriRog,srokGist,main_diseases,sub_diseases
        } = data.body;
        try{
            const query = 'INSERT INTO patients (k_d, first_name, sur_name, vipisan, postupil, perevod, bsj, audioscrinning, fku, sos_pri_post, peref_kateter, linia, aminoven, lipofundin, grud_vskar, smech_vskar, isskus_vskar, immunoglobulin, antibiotiki, bmp, propiska, vos_pri_post, mass_pri_rog, srok_gist, main_disease, sub_disease, last_name) VALUES ($1, $2,$3,$4, $5,$6,$7, $8,$9,$10, $11,$12,$13, $14,$15,$16, $17,$18,$19, $20,$21,$22, $23,$24,$25, $26,$27)';
            const values = [k_d,first_name, sur_name,vipisan,postupil,perevod,bsj,audioscrinning,fku,sosPriPost,perefKateter,linia,aminoven,lipofundin,grudVskar,smechVskar,isskusVskar,immunoglobulin,antibiotiki,bmp,propiska,vosrPriPost,massPriRog,srokGist,main_diseases,sub_diseases,last_name];
            await pool.query(query, values);

            return { success: true, message: `Новый пациент успешно добавлен в базу данных` };
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
            return { success: true, message: `Пользователь успешно удален из базы данных` };
        } catch (error){
            return { success: false, message: error.message };
        }
    }
}

export default UsersModule;