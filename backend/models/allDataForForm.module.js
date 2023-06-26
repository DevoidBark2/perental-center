import pool from "../db.js";

class AllDataForFormModule{
    static async getAllData(){
            try {
        const antibiotikiData = await pool.query('SELECT * FROM antibiotiki');
        const antibiotiki = antibiotikiData.rows.map((row) => ({
            id: row.id,
            value: row.label,
            label: row.label,
        }));

        const vipisanData = await pool.query('SELECT * FROM vipisan');
        const vipisan = vipisanData.rows.map((row) => ({
            id: row.id,
            value: row.label,
            label: row.label,
        }));
        const perevodData = await pool.query('SELECT * FROM perevod_oritn');
        const perevod = perevodData.rows.map((row) => ({
            id: row.id,
            value: row.label,
            label: row.label,
        }));
        const postupilData = await pool.query('SELECT * FROM postupil');
        const postupil = postupilData.rows.map((row) => ({
            id: row.id,
            value: row.label,
            label: row.label,
        }));
        const bmpData = await pool.query('SELECT * FROM bmp');
        const bmp = bmpData.rows.map((row) => ({
            id: row.id,
            value: row.label,
            label: row.label,
        }));
        const immunoglobulinsData = await pool.query('SELECT * FROM immunoglobulins');
        const immunoglobulins = immunoglobulinsData.rows.map((row) => ({
            id: row.id,
            value: row.label,
            label: row.label,
        }));
        const propiskaData = await pool.query('SELECT * FROM propiska');
        const propiska = propiskaData.rows.map((row) => ({
            id: row.id,
            value: row.label,
            label: row.label,
        }));
        const vosrProPostupData = await pool.query('SELECT * FROM vosrt_pri_postup');
        const vosrt_pri_postup = vosrProPostupData.rows.map((row) => ({
            id: row.id,
            value: row.label,
            label: row.label,
        }));
        const massProRogdData = await pool.query('SELECT * FROM mass_pri_rog');
        const mass_pri_rogd = massProRogdData.rows.map((row) => ({
            id: row.id,
            value: row.label,
            label: row.label,
        }));
        const srokGistData = await pool.query('SELECT * FROM srok_gist');
        const srok_gist = srokGistData.rows.map((row) => ({
            id: row.id,
            value: row.label,
            label: row.label,
        }));
        const diseasesData = await pool.query('SELECT * FROM diseases');
        const diseases = diseasesData.rows.map((row) => ({
            id: row.id,
            value: row.label,
            label: row.label,
        }));

       return {
            antibiotiki,
            vipisan,
            perevod,
            postupil,
            bmp,
            immunoglobulins,
            propiska,
            vosrt_pri_postup,
            mass_pri_rogd,
            srok_gist,
            diseases
        };

    } catch(err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
    }
}

export default AllDataForFormModule;