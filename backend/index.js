import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import errorHandler from "./error/apiError.js";
const app = express();
app.use(express.json())
app.use(cors())
app.use('/api',router)
// app.use(errorHandler)

// app.get('/users', async (req, res) => {
//     try {
//         const client = await pool.connect();
//         const result = await client.query('SELECT * FROM users');
//         const users = result.rows;
//         res.send({status: 'success', data: users});
//         client.release();
//     } catch (err) {
//         console.error(err);
//         res.send({status: 'error', message: err.message});
//     }
// });
// app.get('/users/:id', async (req,res) => {
//     const userId = req.params.id;
//     try{
//         const client = await pool.connect();
//         const result = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
//         const user = result.rows[0];
//         if (!user) {
//             res.status(404).send({ status: 'error', message: `User with id ${userId} not found` });
//         } else {
//             res.send({ status: 'success', data: user });
//         }
//         client.release();
//     }catch (err) {
//         console.error(err);
//         res.send({status: 'error', message: err.message});
//     }
// })
// app.post('/login',async (req,res) =>{
//     try {
//         const client = await pool.connect();
//         const result = await client.query(`SELECT * FROM auth WHERE email='${req.body.email}'`);
//         console.log(result);
//         if (result.rows.length === 0) {
//             return res.status(200).json({
//                 message: "Пользователь не найден"
//             })
//         }
//         return res.status(200).json({ message: "Успешно!" })
//         //const isValidPass = await bcrypt.compare(req.body.password, result.rows[0].password);
//     } catch (err) {
//         return res.status(500).json({
//             message: "Произошла ошибка"
//         })
//     }
// })
//
// app.post('/', async (req, res) => {
//     try {
//         const client = await pool.connect();
//         const { k_d, first_name, sur_name,last_name,vipisan,postupil,perevod,bsj,audioscrinning,fku,sosPriPost,perefKateter, linia,aminoven,lipofundin,
//                 grudVskar,smechVskar,isskusVskar,immunoglobulin,antibiotiki,bmp,propiska,vosrPriPost,massPriRog,srokGist,main_diseases,sub_diseases
//         } = req.body;
//         const query = 'INSERT INTO users (k_d, first_name, sur_name, vipisan, postupil, perevod, bsj, audioscrinning, fku, sos_pri_post, peref_kateter, linia, aminoven, lipofundin, grud_vskar, smech_vskar, isskus_vskar, immunoglobulin, antibiotiki, bmp, propiska, vos_pri_post, mass_pri_rog, srok_gist, main_disease, sub_disease, last_name) VALUES ($1, $2,$3,$4, $5,$6,$7, $8,$9,$10, $11,$12,$13, $14,$15,$16, $17,$18,$19, $20,$21,$22, $23,$24,$25, $26,$27)';
//         const values = [k_d,first_name, sur_name,vipisan,postupil,perevod,bsj,audioscrinning,fku,sosPriPost,perefKateter,linia,aminoven,lipofundin,grudVskar,smechVskar,isskusVskar,immunoglobulin,antibiotiki,bmp,propiska,vosrPriPost,massPriRog,srokGist,main_diseases,sub_diseases,last_name];
//         await client.query(query, values);
//         res.status(200).send('User successfully added.');
//     } catch (error) {
//         console.error('Error while adding user: ', error);
//         res.status(500).send('An error occurred while trying to add the user.');
//     }
// });
//
// app.put('/users/:id', async (req, res) => {
//     const id = req.params.id;
//     const { k_d, first_name, sur_name, last_name, vipisan, postupil, perevod, bsj, audioscrinning, fku, sosPriPost, perefKateter, linia, aminoven, lipofundin,
//         grudVskar, smechVskar, isskusVskar, immunoglobulin, antibiotiki, bmp, propiska, vosrPriPost, massPriRog, srokGist, main_diseases, sub_diseases } = req.body;
//
//     try {
//         const client = await pool.connect();
//         const query = `UPDATE users SET
//                     k_d=$2, first_name=$3, sur_name=$4,
//                     last_name=$5, vipisan=$6, postupil=$7,
//                     perevod=$8, bsj=$9, audioscrinning=$10,
//                     fku=$11, sos_pri_post=$12, peref_kateter=$13,
//                     linia=$14, aminoven=$15, lipofundin=$16,
//                     grud_vskar=$17, smech_vskar=$18, isskus_vskar=$19,
//                     immunoglobulin=$20, antibiotiki=$21, bmp=$22,
//                     propiska=$23, vos_pri_post=$24, mass_pri_rog=$25,
//                     srok_gist=$26, main_disease=$27, sub_disease=$28
//                   WHERE id=$1`;
//         const values = [id, k_d, first_name, sur_name, last_name, vipisan, postupil, perevod, bsj, audioscrinning, fku, sosPriPost, perefKateter, linia, aminoven, lipofundin, grudVskar, smechVskar, isskusVskar, immunoglobulin, antibiotiki, bmp, propiska, vosrPriPost, massPriRog, srokGist, main_diseases, sub_diseases];
//         await client.query(query, values);
//         res.status(200).send(`User with id ${id} successfully updated.`);
//     } catch (error) {
//         console.error('Error while updating user: ', error);
//         res.status(500).send(`An error occurred while trying to update the user with id ${id}.`);
//     }
// });


app.listen(4444);