import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import errorHandler from "./error/apiError.js";
const app = express();
app.use(express.json())
app.use(cors())
app.use('/api',router)
// app.use(errorHandler)

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