import pool from "../db.js";

class UsersModule{
    static async getAllUsers() {
        try {
            const { rows } = await pool.query("SELECT * FROM patients ORDER BY id DESC");
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
    static async changeUser(data,id) {
        const { k_d, first_name, sur_name, last_name, vipisan, postupil, perevod, bsj, audioscrinning, fku, sosPriPost, perefKateter, linia, aminoven, lipofundin,
            grudVskar, smechVskar, isskusVskar, immunoglobulin, antibiotiki, bmp, propiska, vosrPriPost, massPriRog, srokGist, main_diseases, sub_diseases } = data.body;
        console.log(data.body)

        try {
            const client = await pool.connect();
            const query = `UPDATE patients SET
                    k_d=$2, first_name=$3, sur_name=$4,
                    last_name=$5, vipisan=$6, postupil=$7,
                    perevod=$8, bsj=$9, audioscrinning=$10,
                    fku=$11, sos_pri_post=$12, peref_kateter=$13,
                    linia=$14, aminoven=$15, lipofundin=$16,
                    grud_vskar=$17, smech_vskar=$18, isskus_vskar=$19,
                    immunoglobulin=$20, antibiotiki=$21, bmp=$22,
                    propiska=$23, vos_pri_post=$24, mass_pri_rog=$25,
                    srok_gist=$26, main_disease=$27, sub_disease=$28
                  WHERE id=$1`;
            const values = [id, k_d, first_name, sur_name, last_name, vipisan, postupil, perevod, bsj, audioscrinning, fku, sosPriPost, perefKateter, linia, aminoven, lipofundin, grudVskar, smechVskar, isskusVskar, immunoglobulin, antibiotiki, bmp, propiska, vosrPriPost, massPriRog, srokGist, main_diseases, sub_diseases];
            await client.query(query, values);
            return { success: true, message: `Данные о пациенте обновлены` };
        } catch (error) {
            console.error('Error while updating user: ', error);
            return { success: false, message: `An error occurred while trying to update the user with id ${id}.` };
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