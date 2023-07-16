import pool from "../db.js";

class ParamsModule{
    static async getVipisan(){
        let word1 = 'Да';
        const query1 = {
            text: 'SELECT * FROM patients WHERE vipisan=$1',
            values: [word1]
        };
        const word1Res = await pool.query(query1);
        let word2 = 'Переведен в ОДКБ';
        const query2 = {
            text: 'SELECT * FROM patients WHERE vipisan=$1',
            values: [word2]
        };
        const word2Res = await pool.query(query2);

        let word3 = 'Переведен в ДКО';
        const query3 = {
            text: 'SELECT * FROM patients WHERE vipisan=$1',
            values: [word3]
        };

        const word3Res = await pool.query(query3);

        let word4 = 'Переведен в ЦГБ';
        const query4 = {
            text: 'SELECT * FROM patients WHERE vipisan=$1',
            values: [word4]
        };
        const word4Res = await pool.query(query4);

        let word5 = 'Переведен в ЦГБ';
        const query5 = {
            text: 'SELECT * FROM patients WHERE vipisan=$1',
            values: [word5]
        };
        const word5Res = await pool.query(query5);

        let word6 = 'Переведен в ЦГБ';
        const query6 = {
            text: 'SELECT * FROM patients WHERE vipisan=$1',
            values: [word6]
        };
        const word6Res = await pool.query(query6);

        return {
            "Yes": word1Res.rowCount,
            "perevodInODKB": word2Res.rowCount,
            "perevodInDKO": word3Res.rowCount,
            "perevodInCGB": word4Res.rowCount,
            "perevodInRyb": word5Res.rowCount,
            "perevodInMos": word6Res.rowCount
        }
    }
    static async getPostupil(){
        let word1 = 'ОРИТН';
        const query1 = {
            text: 'SELECT * FROM patients WHERE postupil=$1',
            values: [word1]
        };
        const word1Res = await pool.query(query1);
    }

    static async getAllParams(){
        const data = await this.getVipisan()
        console.log(data)
    }
}

export default ParamsModule;