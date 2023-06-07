import express from "express";
import pg from "pg";
import cors from "cors";
const app = express();
app.use(express.json())
app.use(cors())

const {Pool} = pg;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'perental-center',
    password: 'root',
    port: 5432,
    });

app.get('/users', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users');
        const users = result.rows;
        res.send({status: 'success', data: users});
        client.release();
    } catch (err) {
        console.error(err);
        res.send({status: 'error', message: err.message});
    }
});
app.get('/get_data', async ( req,res) => {
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

        res.send({
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
        });
    } catch(err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
app.post('/login',async (req,res) =>{
    try {
        const client = await pool.connect();
        const result = await client.query(`SELECT * FROM auth WHERE email='${req.body.email}'`);
        console.log(result);
        if (result.rows.length === 0) {
            return res.status(200).json({
                message: "Пользователь не найден"
            })
        }
        return res.status(200).json({ message: "Успешно!" })
        //const isValidPass = await bcrypt.compare(req.body.password, result.rows[0].password);
    } catch (err) {
        return res.status(500).json({
            message: "Произошла ошибка"
        })
    }
})

app.post('/', async (req, res) => {
    try {
        const client = await pool.connect();
        const { first_name, second_name } = req.body;
        const query = 'INSERT INTO users (first_name, second_name) VALUES ($1, $2)';
        const values = [first_name, second_name];
        await client.query(query, values);
        res.status(200).send('User successfully added.');
    } catch (error) {
        console.error('Error while adding user: ', error);
        res.status(500).send('An error occurred while trying to add the user.');
    }
});


app.listen(4444);