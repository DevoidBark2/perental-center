import pool from "../db.js";

class ParamsModule{
    static async _getVipisanProperty(property){
        const query = {
            text: 'SELECT * FROM patients WHERE vipisan=$1',
            values: [property]
        };
        const res = await pool.query(query);

        if (res.rows && res.rows.length > 0) {
            return res.rowCount;
        } else {
            return 0;
        }
    }
    static async _getPostupilProperty(property){
        const query = {
            text: 'SELECT * FROM patients WHERE postupil=$1',
            values: [property]
        };
        const res = await pool.query(query);

        if (res.rows && res.rows.length > 0) {
            return res.rowCount;
        } else {
            return 0;
        }
    }
    static async _getPerevodProperty(property){
        const query = {
            text: 'SELECT * FROM patients WHERE perevod=$1',
            values: [property]
        };
        const res = await pool.query(query);

        if (res.rows && res.rows.length > 0) {
            return res.rowCount;
        } else {
            return 0;
        }
    }
    static async _getPreparatProperty(property){
        const query = {
            text: `SELECT * FROM patients WHERE ${property}='Да'`,
        };
        const res = await pool.query(query);

        if (res.rows && res.rows.length > 0) {
            return res.rowCount;
        } else {
            return 0;
        }
    }
    static async _getAntibiotikProperty(){
        const query = {
            text: `SELECT antibiotiki FROM patients`,
        };
        const res = await pool.query(query);

        const outputObject = {};

        // Перебираем каждый элемент входного массива
        res.rows.forEach((item) => {
            // Получаем значение ключа "antibiotiki"
            const antibiotics = item.antibiotiki;

            // Перебираем каждый антибиотик в текущем элементе массива
            antibiotics.forEach((value) => {
                // Если антибиотик уже присутствует как ключ в объекте, увеличиваем его счетчик на 1
                if (outputObject[value]) {
                    outputObject[value] += 1;
                } else {
                    // Иначе добавляем антибиотик в качестве нового ключа и устанавливаем счетчик равным 1
                    outputObject[value] = 1;
                }
            });
        });

    // Преобразуем объект в массив объектов с желаемой структурой
        const outputArray = Object.entries(outputObject).map(([label, value]) => ({
            label,
            value
        }));

        if (res.rows && res.rows.length > 0) {
            return outputArray;
        } else {
            return 0;
        }
    }

    static async _getImmunoglobulinsProperty(){
        const query = {
            text: `SELECT immunoglobulin FROM patients`,
        };
        const res = await pool.query(query);

        const outputObject = {};

        // Перебираем каждый элемент входного массива
        res.rows.forEach((item) => {
            // Получаем значение ключа "antibiotiki"
            const antibiotics = item.immunoglobulin;

            // Перебираем каждый антибиотик в текущем элементе массива
            antibiotics.forEach((value) => {
                // Если антибиотик уже присутствует как ключ в объекте, увеличиваем его счетчик на 1
                if (outputObject[value]) {
                    outputObject[value] += 1;
                } else {
                    // Иначе добавляем антибиотик в качестве нового ключа и устанавливаем счетчик равным 1
                    outputObject[value] = 1;
                }
            });
        });

        // Преобразуем объект в массив объектов с желаемой структурой
        const outputArray = Object.entries(outputObject).map(([label, value]) => ({
            label,
            value
        }));

        if (res.rows && res.rows.length > 0) {
            return outputArray;
        } else {
            return 0;
        }
    }
    static async _getMassPriRogProperty(){
        const query = {
            text: `SELECT k_d,mass_pri_rog FROM patients`,
        };
        const res = await pool.query(query);
        // Создаем объект для хранения результата
        const result = {};

        // Перебираем элементы и подсчитываем количество и сумму k_d для каждого названия
        res.rows.forEach(item => {
            const { mass_pri_rog, k_d } = item;
            if (!result[mass_pri_rog]) {
                result[mass_pri_rog] = {
                    label: mass_pri_rog,
                    value: 0,
                    k_d_sum: 0
                };
            }
            result[mass_pri_rog].value += 1;
            result[mass_pri_rog].k_d_sum += parseInt(k_d);
        });

        // Преобразуем объект в массив значений
        const output = Object.values(result);

        if (res.rows && res.rows.length > 0) {
            return output;
        } else {
            return 0;
        }
    }
    static async _getBmpProperty(){
        const query = {
            text: `SELECT bmp FROM patients`,
        };
        const res = await pool.query(query);
        //console.log(res)
        const outputObject = {};

        // Перебираем каждый элемент входного массива
        res.rows.forEach((item) => {
            // Получаем значение ключа "antibiotiki"
            const antibiotics = item.bmp;

            // Перебираем каждый антибиотик в текущем элементе массива
                // Если антибиотик уже присутствует как ключ в объекте, увеличиваем его счетчик на 1
                if (outputObject[antibiotics]) {
                    outputObject[antibiotics] += 1;
                } else {
                    // Иначе добавляем антибиотик в качестве нового ключа и устанавливаем счетчик равным 1
                    outputObject[antibiotics] = 1;
                }
        });

        // Преобразуем объект в массив объектов с желаемой структурой
        const outputArray = Object.entries(outputObject).map(([label, value]) => ({
            label,
            value
        }));

        if (res.rows && res.rows.length > 0) {
            return outputArray;
        } else {
            return 0;
        }
    }
    static async _getPropiskaProperty(){
        const query = {
            text: `SELECT propiska FROM patients`,
        };
        const res = await pool.query(query);
        //console.log(res)
        const outputObject = {};

        // Перебираем каждый элемент входного массива
        res.rows.forEach((item) => {
            // Получаем значение ключа "antibiotiki"
            const antibiotics = item.propiska;

            // Перебираем каждый антибиотик в текущем элементе массива
            // Если антибиотик уже присутствует как ключ в объекте, увеличиваем его счетчик на 1
            if (outputObject[antibiotics]) {
                outputObject[antibiotics] += 1;
            } else {
                // Иначе добавляем антибиотик в качестве нового ключа и устанавливаем счетчик равным 1
                outputObject[antibiotics] = 1;
            }
        });

        // Преобразуем объект в массив объектов с желаемой структурой
        const outputArray = Object.entries(outputObject).map(([label, value]) => ({
            label,
            value
        }));

        if (res.rows && res.rows.length > 0) {
            return outputArray;
        } else {
            return 0;
        }
    }
    static async _getVosrPriPostProperty(){
        const query = {
            text: `SELECT vos_pri_post FROM patients`,
        };
        const res = await pool.query(query);
        //console.log(res)
        const outputObject = {};

        // Перебираем каждый элемент входного массива
        res.rows.forEach((item) => {
            // Получаем значение ключа "antibiotiki"
            const antibiotics = item.vos_pri_post;

            // Перебираем каждый антибиотик в текущем элементе массива
            // Если антибиотик уже присутствует как ключ в объекте, увеличиваем его счетчик на 1
            if (outputObject[antibiotics]) {
                outputObject[antibiotics] += 1;
            } else {
                // Иначе добавляем антибиотик в качестве нового ключа и устанавливаем счетчик равным 1
                outputObject[antibiotics] = 1;
            }
        });

        // Преобразуем объект в массив объектов с желаемой структурой
        const outputArray = Object.entries(outputObject).map(([label, value]) => ({
            label,
            value
        }));

        if (res.rows && res.rows.length > 0) {
            return outputArray;
        } else {
            return 0;
        }
    }

    static async _getSrokGistProperty(){
        const query = {
            text: `SELECT srok_gist FROM patients`,
        };
        const res = await pool.query(query);
        //console.log(res)
        const outputObject = {};

        // Перебираем каждый элемент входного массива
        res.rows.forEach((item) => {
            // Получаем значение ключа "antibiotiki"
            const antibiotics = item.srok_gist;

            // Перебираем каждый антибиотик в текущем элементе массива
            // Если антибиотик уже присутствует как ключ в объекте, увеличиваем его счетчик на 1
            if (outputObject[antibiotics]) {
                outputObject[antibiotics] += 1;
            } else {
                // Иначе добавляем антибиотик в качестве нового ключа и устанавливаем счетчик равным 1
                outputObject[antibiotics] = 1;
            }
        });

        // Преобразуем объект в массив объектов с желаемой структурой
        const outputArray = Object.entries(outputObject).map(([label, value]) => ({
            label,
            value
        }));

        if (res.rows && res.rows.length > 0) {
            return outputArray;
        } else {
            return 0;
        }
    }
    static async _getMainDiseasesProperty(){
        const query = {
            text: `SELECT main_disease FROM patients`,
        };
        const res = await pool.query(query);
       // console.log(res)
        const outputObject = {};

        // Перебираем каждый элемент входного массива
        res.rows.forEach((item) => {
            // Получаем значение ключа "antibiotiki"
            const antibiotics = item.main_disease;

            // Перебираем каждый антибиотик в текущем элементе массива
            // Если антибиотик уже присутствует как ключ в объекте, увеличиваем его счетчик на 1
            if (outputObject[antibiotics]) {
                outputObject[antibiotics] += 1;
            } else {
                // Иначе добавляем антибиотик в качестве нового ключа и устанавливаем счетчик равным 1
                outputObject[antibiotics] = 1;
            }
        });

        // Преобразуем объект в массив объектов с желаемой структурой
        const outputArray = Object.entries(outputObject).map(([label, value]) => ({
            label,
            value
        }));

        if (res.rows && res.rows.length > 0) {
            return outputArray;
        } else {
            return 0;
        }
    }
    static async _getSubDiseasesProperty(){
        const query = {
            text: `SELECT k_d,sub_disease FROM patients`,
        };
        const res = await pool.query(query);
        // Создаем объект для хранения результата
        const result = {};

        // Перебираем элементы и подсчитываем количество и сумму k_d для каждого названия
        res.rows.forEach(item => {
            const { sub_disease, k_d } = item;
            if (!result[sub_disease]) {
                result[sub_disease] = {
                    label: sub_disease,
                    value: 0,
                    k_d_sum: 0
                };
            }
            result[sub_disease].value += 1;
            result[sub_disease].k_d_sum += parseInt(k_d);
        });

        // Преобразуем объект в массив значений
        const output = Object.values(result);

        if (res.rows && res.rows.length > 0) {
            return output;
        } else {
            return 0;
        }
    }
    static async getAllParams(){
        let vipisanYes = await this._getVipisanProperty("Да");
        let vipisanODKB = await this._getVipisanProperty("Переведен в ОДКБ");
        let vipisanCGB  = await this._getVipisanProperty("Переведен в ЦГБ");
        let vipisanDKO = await this._getVipisanProperty("Переведен в ДКО");
        let vipisanRybinsk = await this._getVipisanProperty("Переведен в г.Рыбинск");
        let vipisanMoscow = await this._getVipisanProperty("Переведен в г.Москва");

        let postupilORITN = await this._getPostupilProperty('ОРИТН')
        let postupilOPC = await this._getPostupilProperty('Р/О ОПЦ')
        let postupilR_D_2 = await this._getPostupilProperty('Р/О р/д №2')
        let postupilR_D_9 = await this._getPostupilProperty('Р/О р/д №9')
        let postupilR_D_10 = await this._getPostupilProperty('Р/О р/д №10')
        let postupilRybinsk = await this._getPostupilProperty('Р/О Рыбинск')
        let postupilYglich = await this._getPostupilProperty('Р/О Углич')
        let postupilPereslavl = await this._getPostupilProperty('Р/О Переславль')

        let perevodSostoynie = await this._getPerevodProperty('состояние')
        let perevodOperation = await this._getPerevodProperty('операция')
        let perevodEMOLT = await this._getPerevodProperty('ЭМОЛТ')
        let perevodNet = await this._getPerevodProperty('Нет')

        let bsjCount = await this._getPreparatProperty('bsj');
        let audioCount = await this._getPreparatProperty('audioscrinning');
        let fkuCount = await this._getPreparatProperty('fku');
        let sosPriPostCount = await this._getPreparatProperty('sos_pri_post');
        let perefCateterCount = await this._getPreparatProperty('peref_kateter');
        let liniaCount = await this._getPreparatProperty('linia');
        let aminovenCount = await this._getPreparatProperty('aminoven');
        let lipofundinCount = await this._getPreparatProperty('lipofundin');
        let grudVskarCount = await this._getPreparatProperty('grud_vskar');
        let smeshVskarCount = await this._getPreparatProperty('smech_vskar');
        let isskusVskarCount = await this._getPreparatProperty('isskus_vskar');

        let antibiotiki = await this._getAntibiotikProperty();
        let immunoglobulins = await this._getImmunoglobulinsProperty()

        let mass_pri_rog = await this._getMassPriRogProperty()
        let bmp = await this._getBmpProperty()
        let propiska = await this._getPropiskaProperty()
        let vos_pri_post = await this._getVosrPriPostProperty()
        let srok_gist = await this._getSrokGistProperty()
        let main_diseases = await this._getMainDiseasesProperty()
        let sub_diseases = await this._getSubDiseasesProperty()

        const query = {
            text: `SELECT * FROM patients`,
        };
        const resCount = await pool.query(query);
        return [
            {
                "label" : "Выписан домой",
                "value": [{
                    "label": "Да",
                    "value" : vipisanYes
                },
                    {
                        "label": "Переведен в ОДКБ",
                        "value" : vipisanODKB
                    },
                    {
                        "label": "Переведен в ЦГБ",
                        "value" : vipisanCGB
                    },
                    {
                        "label": "Переведен в ДКО",
                        "value" : vipisanDKO
                    },
                    {
                        "label": "Переведен в г.Рыбинск",
                        "value" : vipisanRybinsk
                    },
                    {
                        "label": "Переведен в г.Москва",
                        "value" : vipisanMoscow
                    }]
            },
            {
                "label" :"Поступил",
                "value" : [
                    {
                        "label" : "ОРИТН",
                        "value" : postupilORITN
                    },
                    {
                        "label" : "Р/О ОПЦ",
                        "value" : postupilOPC
                    },
                    {
                        "label" : "Р/О р/д №2",
                        "value" : postupilR_D_2
                    },
                    {
                        "label" : "Р/О р/д №9",
                        "value" : postupilR_D_9
                    },
                    {
                        "label" : "Р/О р/д №10",
                        "value" : postupilR_D_10
                    },
                    {
                        "label" : "Р/О Рыбинск",
                        "value" : postupilRybinsk
                    },
                    {
                        "label" : "Р/О Углич",
                        "value" : postupilYglich
                    },
                    {
                        "label" : "Р/О Переславль",
                        "value" : postupilPereslavl
                    }
                ]
            },
            {
                "label" :"Переведен в ОРИТН",
                "value" : [
                    {
                        "label" : "состояние",
                        "value" : perevodSostoynie
                    },
                    {
                        "label" : "операция",
                        "value" : perevodOperation
                    },
                    {
                        "label" : "ЭМОЛТ",
                        "value" : perevodEMOLT
                    },
                    {
                        "label" : "Нет",
                        "value" : perevodNet
                    }
                ]
            },
            {
                "label" : "Препараты",
                "count" : resCount.rowCount,
                "value" : [
                    {
                        "label" : "БЦЖ",
                        "value" : bsjCount
                    },
                    {
                        "label": "Аудиоскриннинг",
                        "value" : audioCount
                    },
                    {
                        "label" : "ФКУ",
                        "value" : fkuCount
                    },
                    {
                        "label": "Состояние при поступлении",
                        "value" : sosPriPostCount
                    },
                    {
                        "label" : "Переферический катетер",
                        "value" : perefCateterCount
                    },
                    {
                        "label": "Линия",
                        "value" : liniaCount
                    },
                    {
                        "label" : "Аминовен",
                        "value" : aminovenCount
                    },
                    {
                        "label": "Липофундин",
                        "value" : lipofundinCount
                    },
                    {
                        "label": "Грудное вскармливание",
                        "value" : grudVskarCount
                    },
                    {
                        "label" : "Смешенное вскармливание",
                        "value" : smeshVskarCount
                    },
                    {
                        "label": "Исскуственное вскармливание",
                        "value" : isskusVskarCount
                    }
                ]
            },
            {
                "label": "Антибиотики",
                "value" :antibiotiki
            },
            {
                "label" : "Иммуноглобулины",
                "value" : immunoglobulins
            },
            {
                "label": "Масса при рождении",
                "value" : mass_pri_rog
            },
            {
                "label" : "ВМП",
                "value" : bmp
            },
            {
                "label" : "Прописка",
                "value" : propiska
            },
            {
                "label" : "Возраст при поступлении",
                "value" : vos_pri_post
            },
            {
                "label" : "Срок гистации",
                "value" : srok_gist
            },
            {
                "label" : "Основное заболевание",
                "value" : main_diseases
            },
            {
                "label" : "Сопуствующие заболевания",
                "value" : sub_diseases
            }
        ]
    }


    static async getAllParamsAdmin(){
        const query = {
            text: `SELECT ap.*, acp.name as category_name, ap.name as param_name
                    FROM admin_params as ap
                    JOIN admin_category_params as acp ON ap.cat_id = acp.id`,
        };

        const typesData = await pool.query('SELECT * from admin_types');
        const types = typesData.rows.map((row) => ({
            id: row.id,
            value: row.name,
            label: row.name,
        }));
        const categoryData = await pool.query('SELECT * from admin_category_params');
        const category = categoryData.rows.map((row) => ({
            id: row.id,
            value: row.name,
            label: row.name,
        }));
        const res = await pool.query(query);
        if (res.rows && res.rows.length > 0) {
            return {
                "params": res.rows,
                "types": types,
                "category": category
            }
        } else {
            return [];
        }
    }
    static async getInfoParam(req){
        const {id} = req.params;

        const query1 = {
            text: `SELECT name FROM admin_category_params WHERE id = $1`,
            values: [id]
        };

        const name_category = await pool.query(query1);

        const query2 = {
            text: `SELECT name FROM admin_params_elem WHERE params_id=$1`,
            values: [id]
        };

        const values_param = await pool.query(query2);
        return {"site_name":name_category.rows,"values_param":values_param.rows}
    }

    static async createParam(req){
        const {name,type,category} = req.body;

        try{
            const query = {
                text: `SELECT id FROM admin_category_params WHERE name=$1`,
                values: [category]
            }
            const category_id_result = await pool.query(query);
            const category_id  = category_id_result.rows[0].id

            const query3 = `INSERT INTO admin_params (name,cat_id,type) VALUES ($1,$2,$3)`
            const values = [name,category_id,type]

            const res = await pool.query(query3, values)
            console.log(res)
            return {success: true,message:"Новый параметр добавлен"}
        }
        catch (e){
            return { success: false, message: e };
        }

    }
    static async createValueParam(req) {
        try {
            const {name,params_id} = req.body;
            const query = {
                text: `INSERT INTO antibiotiki(label) VALUES($1)`,
                values: [name]
            }
            await pool.query(query)

            const query2 = {
                text: `INSERT INTO admin_params_elem(params_id,name) VALUES($1,$2)`,
                values: [params_id,name]
            }
            await pool.query(query2)

            return {success: true,message:"Новое значение добавлено"}
        }catch (e){
            return {success: false,message:e}
        }
    }
}

export default ParamsModule;