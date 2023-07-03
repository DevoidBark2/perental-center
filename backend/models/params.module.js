import pool from "../db.js";

class ParamsModule{
    static async _getPerevodODKB(){


    }
    static async getAllParams(){
        let word = 'Да';
        const query = {
            text: 'SELECT * FROM patients WHERE bsj=$1',
            values: [word]
        };
        const res = await pool.query(query);
        console.log(res)
        if (res.rows && res.rows.length > 0) {
            return res.rows[0].count;
        } else {
            console.log('Результат пуст');
        }
    }
}

export default ParamsModule;